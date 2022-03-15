using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class OrderDetailDto : BaseDto
    {
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public Guid? OrderId { get; set; }
        public OrderDto Order { get; set; }
        public Guid? ProductId { get; set; }
        public ProductDto Product { get; set; }
    }
}
