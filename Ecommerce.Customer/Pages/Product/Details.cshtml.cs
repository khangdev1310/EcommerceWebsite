using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos;
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
        public ProductDto ProductDetail { get; set; }
        public List<ProductDto> RelatedProducts { get; set; }
        public List<CategoryDto> Categories { get; set; }


        public DetailsModel(IProductService productService, ICategoryService categoryService)
        {
            _productService = productService;
            _categoryService = categoryService;
        }

        public async Task<ActionResult> OnGet(Guid id)
        {
            ProductDetail = await _productService.GetByIdAsync(id);
            RelatedProducts = await _productService.GetRelatedProduct(ProductDetail.CategoryId, 4);
            Categories = (List<CategoryDto>)await _categoryService.GetAllAsync();
            
            if (ProductDetail == null)
            {
                return NotFound();
            }
            return Page();
        }

    }
}
