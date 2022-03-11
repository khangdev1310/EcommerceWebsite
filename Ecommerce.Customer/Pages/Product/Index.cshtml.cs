using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Product
{
    public class IndexModel : PageModel
    {
        private readonly IProductService _productService;
        
        public IndexModel(IProductService productService)
        {
            _productService = productService;

        }
        public PagedResponseModel<ProductDto> Products { get; set; }
        public ProductDto productDto { get; set; }
        public int CurrentPage { get; set; } = 1;
        public int PageSize { get; set; } = 5;

        public void OnGet()
        {
            
        }
        
       

    }
}
