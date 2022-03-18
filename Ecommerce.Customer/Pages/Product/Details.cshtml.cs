using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Rating;
using Ecommerce.Customer.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Product
{
    public class DetailsModel : PageModel
    {
        private readonly IProductService _productService;
        private readonly ICategoryService _categoryService;
        private readonly IRatingService _ratingService;
        public ProductDto ProductDetail { get; set; }
        public List<ProductDto> RelatedProducts { get; set; }
        public List<CategoryDto> Categories { get; set; }
        public List<ProductItemCartDto> Cart { get; set; }
        public List<RatingDto> ListReviews { get; set; }
        public int ProductQty { get; set; } = 1;


        public DetailsModel(IProductService productService, ICategoryService categoryService, IRatingService ratingService)
        {
            _productService = productService;
            _categoryService = categoryService;
            _ratingService = ratingService;
        }

        public async Task<ActionResult> OnGetAsync(Guid id)
        {
            ProductDetail = await _productService.GetByIdAsync(id);
            RelatedProducts = await _productService.GetRelatedProduct(ProductDetail.CategoryId, 4);
            Categories = (List<CategoryDto>)await _categoryService.GetAllAsync();
            ListReviews = await _ratingService.GetListRatingByProductIdAsync(id);


            if (ProductDetail == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<ActionResult> OnPostCartList(Guid id, int ProductQty)
        {
            ProductDetail = await _productService.GetByIdAsync(id);
            if(ProductDetail != null)
            {
                Cart = SessionHelper.GetObjectFromJson<List<ProductItemCartDto>>(HttpContext.Session, "cart");
                if(Cart == null)
                {
                    Cart = new List<ProductItemCartDto>
                    {
                        new ProductItemCartDto
                        {
                            Product = ProductDetail,
                            Quantity = ProductQty
                        }
                    };
                }
                else
                {
                    int index = Exists(Cart, ProductDetail.Id);
                    if(index == -1)
                    {
                        Cart.Add(new ProductItemCartDto
                        {
                            Product = ProductDetail,
                            Quantity = ProductQty
                        });
                    }
                    else
                    {
                        Cart[index].Quantity = ProductQty; 
                    }
                }
                SessionHelper.SetObjectAsJson(HttpContext.Session,"cart",Cart);
                return RedirectToPage($"/Product/Index");
            }

            return NotFound();
        }

        private static int Exists(List<ProductItemCartDto> cart, Guid productId)
        {
            for (int i = 0; i < cart.Count; i++)
            {
                if(cart[i].Product.Id == productId)
                {
                    return i;
                }
            }
            return -1;
        }

    }
}
