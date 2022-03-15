using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class OrderDto : BaseDto
    {
        public string Status { get; set; }
        public decimal Price { get; set; }
        
        public string NoteOrder { get; set; }
    }
}
