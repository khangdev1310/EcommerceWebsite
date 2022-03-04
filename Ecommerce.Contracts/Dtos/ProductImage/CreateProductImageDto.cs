using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class CreateProductImageDto
    {
        
        public string ImageUrl { get; set; }
        public Guid ProductId { get; set; }
        
    }
}
