using Ecommerce.Business.Interfaces;
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
       
        public ProductDto productDto { get; set; }

        public void OnGet()
        {
            
        }
        
       

    }
}
