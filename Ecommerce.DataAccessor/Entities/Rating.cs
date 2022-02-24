using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.DataAccessor.Entities
{
    public class Rating : BaseEntity
    {
        
        [Required]
        public string Comment { get; set; }
        [Range(0,5)]
        public float Star { get; set; }

        public Guid? ProductId { get; set; }
        public Product Product { get; set; }
    }
}
