using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class BaseDto
    {
        public Guid Id { get; set; }

        public DateTime CreatedDate { get; set; } 

        public DateTime UpdatedDate { get; set; }

        public string? CreatorId { get; set; }
        public string? UpdaterId { get; set; }
    }
}
