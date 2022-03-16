using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Order
{
    public class CreateOrderDetailDto
    {
        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public Guid OrderId { get; set; }

        public Guid ProductId { get; set; }

        public Guid CreatedBy { get; set; }
        public Guid UpdatedBy { get; set; }
    }
}
