using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Rating
{
    public class RatingDto : BaseDto
    {

        public string Comment { get; set; }
 
        public float Star { get; set; }
        public bool IsRated { get; set; }

        public Guid OrderDetailId { get; set; }
        public OrderDetailDto OrderDetail { get; set; }

        public Guid ProductId { get; set; }
        public ProductDto Product { get; set; }

    }
}
