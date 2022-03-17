using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Auth;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.Contracts.Dtos.Rating;
using Ecommerce.Customer.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Product
{
    [Authorize]
    public class CheckoutModel : PageModel
    {
        private readonly IOrderService _orderService;
        private readonly IOrganicIdentityUserService _organicIdentityUserService;
        private readonly IOrderDetailService _orderDetailService;
        private IRatingService _ratingService;

        public CheckoutModel(IOrganicIdentityUserService organicIdentityUserService, IOrderService orderService,
           IOrderDetailService orderDetailService, IRatingService ratingService)
        {
            _organicIdentityUserService = organicIdentityUserService;
            _orderService = orderService;
            _orderDetailService = orderDetailService;
            _ratingService = ratingService;
        }

        public List<ProductItemCartDto> Cart { get; set; }
        public OrganicIdentityUserDto CurrentUser { get; set; }

        public decimal TotalMoney { get; set; }
        

        [BindProperty]
        public CreateOrderDto CreateOrder { get; set; }

        public async Task<IActionResult> OnGet()
        {
            if (!User.Identity.IsAuthenticated)
                return RedirectToPage("/Home/Index");

            Cart = SessionHelper.GetObjectFromJson<List<ProductItemCartDto>>(HttpContext.Session, "cart");
            CurrentUser = await _organicIdentityUserService.GetById(User.Claims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier).Value);

            CreateOrder = new CreateOrderDto
            {
                FirstName = CurrentUser.FirstName,
                LastName = CurrentUser.LastName,
                Country = CurrentUser.Country,
                Street = CurrentUser.Line1,
                PhoneNumber = CurrentUser.PhoneNumber,
                Province = CurrentUser.Province,
            };
            if (Cart == null)
            {
                return RedirectToPage("/Home/Index");
            }

            TotalMoney = Cart.Sum(p => p.Quantity * p.Product.Price);

            return Page();
        }

        
        public async Task<IActionResult> OnPostAsync()
        {
            if (ModelState.IsValid)
            {
                Cart = SessionHelper.GetObjectFromJson<List<ProductItemCartDto>>(HttpContext.Session, "cart");
                if(Cart != null)
                {
                    Guid userId = Guid.Parse(User.Claims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier).Value);
                    CreateOrder.Price = Cart.Sum(i => i.Quantity * i.Product.Price);
                    CreateOrder.Status = "Funfill";
                    CreateOrder.CreatedBy = CreateOrder.UpdatedBy = userId;
                    OrderDto order = await _orderService.CreateOrder(CreateOrder);
                    List<CreateOrderDetailDto> createOrderDetailsDto = new List<CreateOrderDetailDto>();
                    List<CreateRatingDto> createRatingDtos = new List<CreateRatingDto>();

                    foreach (var item in Cart)
                    {
                        createOrderDetailsDto.Add(new CreateOrderDetailDto
                        {
                            OrderId = order.Id,
                            UnitPrice = item.Product.Price,
                            Quantity = item.Quantity,
                            ProductId = item.Product.Id,
                            CreatedBy = userId,
                            UpdatedBy = userId,
                        });


                        //Initial
                        createRatingDtos.Add(new CreateRatingDto
                        {
                            ProductId = item.Product.Id,
                            OrderDetailId = order.Id,
                            IsRated = false,
                            Comment = "",
                            Star = 5,
                            CreatedBy = userId,
                            UpdatedBy= userId,
                        });
                    }


                    List<OrderDetailDto> orderDetailDtos = await _orderDetailService.AddRangeOrderDetailsAsync(createOrderDetailsDto);
                    for (int i = 0; i < orderDetailDtos.Count; i++)
                    {
                        createRatingDtos[i].OrderDetailId = orderDetailDtos[i].Id;
                    }
                    await _ratingService.AddRangeRatingAsync(createRatingDtos);

                    SessionHelper.Remove(HttpContext.Session, "cart");
                    Cart = null;
                }
            }
            return Page();
        }
    }
}
