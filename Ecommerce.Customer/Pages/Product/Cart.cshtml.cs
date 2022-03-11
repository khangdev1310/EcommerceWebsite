using Ecommerce.Contracts.Dtos;
using Ecommerce.Customer.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Linq;

namespace Ecommerce.Customer.Pages.Product
{
    public class CartModel : PageModel
    {
        public List<ProductItemCartDto> Cart { get; set; }
        public decimal Total { get; set; }

        public void OnGet()
        {
            Cart = SessionHelper.GetObjectFromJson<List<ProductItemCartDto>>(HttpContext.Session, "cart");
            if(Cart != null)
            {
                Total = Cart.Sum(i => i.Quantity * i.Product.Price);
            }
            else
            {
                Total = 0;
            }
        }
    }
}
