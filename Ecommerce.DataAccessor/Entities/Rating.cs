using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.DataAccessor.Entities
{
    public class Rating : BaseEntity
    {
        
        [Required]
        public string Comment { get; set; }
        [Range(0, 5)]
        public float Star { get; set; } = 5;

        [Column("Order_detail_id")]
        public Guid OrderDetailId { get; set; }
        public OrderDetail OrderDetail { get; set; }

        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public bool IsRated { get; set; } = false;
    }
}
