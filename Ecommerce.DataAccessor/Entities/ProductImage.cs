using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.DataAccessor.Entities
{
    public class ProductImage : BaseEntity
    {
        [Required]
        public string ImageUrl { get; set; }
        public Guid? ProductId { get; set; }
        public Product Product { get; set; }

    }
}
