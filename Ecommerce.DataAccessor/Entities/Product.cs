using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.DataAccessor.Entities
{
    public class Product : BaseEntity
    {
        [Required]
        [StringLength(maximumLength: 50)]
        public string Name { get; set; }

        [Required]
        [StringLength(maximumLength: 100)]
        public string Desc { get; set; }

        public decimal Price { get; set; }

        public bool IsFeatured { get; set; }

        public int Quantity { get; set; }

        public Guid? CategoryId { get; set; }

        public Category Category { get; set; }

        public ICollection<ProductImage> ProductImages { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
