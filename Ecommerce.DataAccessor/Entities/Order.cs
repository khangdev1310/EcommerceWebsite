
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.DataAccessor.Entities
{
    public class Order : BaseEntity
    {
        public string Status { get; set; }
        
        [Column("TotalPrice")]
        public decimal Price { get; set; }
        [Column("Note")]
        public string NoteOrder { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(50)]
        public string PhoneNumber { get; set; }

        [Required]
        [MaxLength(255)]
        public string Street { get; set; }

        [Required]
        [MaxLength(255)]
        public string Province { get; set; }

        [Required]
        [MaxLength(255)]
        public string Country { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
