using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Account.HistoryOrder
{
    public class IndexModel : PageModel
    {
        private readonly IOrderService _orderService;
        private readonly IOrderDetailService _orderDetailService;

        public IndexModel(IOrderService orderService)
        {
            _orderService = orderService;
            
        }

        public OrderDto Order { get; set; }
        

        public async Task<IActionResult> OnGet(Guid id)
        {
            Order = await _orderService.GetOrderByIdAsync(id);
            
            if (Order == null)
            {
                return NotFound();
            }

            return Page();
        }
    }
}
