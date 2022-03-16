using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Order
{
    public class CreateOrderDto
    {
        public string Status { get; set; }
        public decimal Price { get; set; }
        public string NoteOrder { get; set; }

        [Required(ErrorMessage = "FirstName không được để trống")]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName không được để trống")]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "PhoneNumber không được để trống")]
        [MaxLength(50)]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Street không được để trống")]
        [MaxLength(255)]
        public string Street { get; set; }

        [Required(ErrorMessage = "Province không được để trống")]
        [MaxLength(255)]
        public string Province { get; set; }

        [Required(ErrorMessage = "Country không được để trống")]
        [MaxLength(255)]
        public string Country { get; set; }

        public Guid CreatedBy { get; set; }
        public Guid UpdatedBy { get; set; }


    }
}
