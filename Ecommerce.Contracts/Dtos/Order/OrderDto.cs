using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class OrderDto : BaseDto
    {
        public string Status { get; set; }

        [Column("TotalPrice")]
        public decimal Price { get; set; }
        [Column("Note")]
        public string NoteOrder { get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }
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

        public ICollection<OrderDetailDto> OrderDetails { get; set; }
    }
}
