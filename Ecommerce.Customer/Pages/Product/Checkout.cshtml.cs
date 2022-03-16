using Ecommerce.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Ecommerce.Customer.Pages.Product
{
    public class CheckoutModel : PageModel
    {
        private readonly IOrderService _orderService;
        
        public void OnGet()
        {
        }
    }
}
