using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class ProductImageDto : BaseDto
    {
        
        public string ImageUrl { get; set; }
        public Guid? ProductId { get; set; }
        public ProductDto Product { get; set; }
    }
}
