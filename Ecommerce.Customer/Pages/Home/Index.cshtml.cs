using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.NewFolder
{
    public class HomeModel : PageModel
    {

        private readonly IProductService _productService;
        private readonly ICategoryService _categoryService;
        public HomeModel(IProductService productService, ICategoryService categoryService)
        {
            _productService = productService;
            _categoryService = categoryService;
        }

        public PagedResponseModel<ProductDto> Products { get; set; }
        public List<CategoryDto> Categories { get; set; }
        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; } = 5;

        
        public async Task OnGet()
        {   
            Products = await _productService.PagedQueryAsync(null, CurrentPage,PageSize);
            Categories = (List<CategoryDto>) await _categoryService.GetAllAsync();
            
        }
    }
}
