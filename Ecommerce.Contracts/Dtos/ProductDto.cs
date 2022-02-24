using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class ProductDto : BaseDto
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Desc { get; set; }
        public bool IsFeatured { get; set; }
        public int Quantity { get; set; }
        
        public Guid? CategoryId { get; set; }
        public CategoryDto Category { get; set; }

        
    }
}
