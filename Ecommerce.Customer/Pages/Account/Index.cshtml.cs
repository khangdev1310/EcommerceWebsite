using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Auth;
using Ecommerce.DataAccessor.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Account
{
    [Authorize]
    public class IndexModel : PageModel
    {
        private readonly IOrganicIdentityUserService _organicIdentityUserService;
        private readonly IOrderService _orderService;
        private readonly IRatingService _ratingService;

        public IndexModel(IOrganicIdentityUserService organicIdentityUserService, IOrderService orderService, IRatingService ratingService  )
        {
            _organicIdentityUserService = organicIdentityUserService;
            _orderService = orderService;
            _ratingService = ratingService;
        }

        public OrganicIdentityUserDto CurrentUser { get; set; }
        public int TotalOrder { get; set; }
        public int TotalRatedProduct { get; set; }
        public List<OrderDto> Orders { get; set; }

        public async Task<IActionResult> OnGet()
        {
            CurrentUser = await _organicIdentityUserService.GetById(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);    

            if(CurrentUser == null)
            {
                return RedirectToPage("/Home");
            }

            TotalOrder = await _orderService.GetTotalOrderByUserId(CurrentUser.Id);
            TotalRatedProduct = await _ratingService.GetTotalRatingByUserId(CurrentUser.Id);
            Orders = await _orderService.GetListOrderByUserIdAsync(CurrentUser.Id);
            if(Orders == null)
            {
                Orders = new List<OrderDto>();
            }

            return Page();
        }
    }
}
