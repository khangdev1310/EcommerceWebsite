using Ecommerce.Contracts.Dtos.Rating;
using System;

namespace Ecommerce.Contracts.Dtos
{
    public class OrderDetailDto : BaseDto
    {
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public ProductDto Product { get; set; }
        public RatingDto Rating { get; set; }
    }
}
