using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Rating
{
    public class UpdateRatingDto
    {
        public Guid Id { get; set; }
        

        [StringLength(5000)]
        public string Comment { get; set; }

        [Range(0, 5)]
        public float Star { get; set; } = 5;
        public bool IsRated { get; set; } = false;

        public DateTime UpdateDate { get; set; }



    }
}
