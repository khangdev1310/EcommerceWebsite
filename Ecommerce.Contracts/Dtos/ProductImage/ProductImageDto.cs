using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class ProductImageDto : BaseDto
    {
        
        public string ImageUrl { get; set; }
        public Guid ProductId { get; set; }

        [JsonIgnore]
        public ProductDto Product { get; set; }
    }
}
