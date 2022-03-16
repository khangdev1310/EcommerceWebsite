using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Rating
{
    public class CreateRatingDto
    {

        [StringLength(5000)]
        public string Comment { get; set; }
        
        [Range(0,5)]
        public float Star { get; set; }
        public bool IsRated { get; set; }
        public Guid OrderDetailId { get; set; }
        public Guid ProductId { get; set; }

        public Guid CreatedBy { get; set; }
        public Guid UpdatedBy { get; set; }

    }
}
