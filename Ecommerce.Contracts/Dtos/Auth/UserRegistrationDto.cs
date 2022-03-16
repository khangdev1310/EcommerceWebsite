using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Auth
{
    public class UserRegistrationDto
    {
        [Required(ErrorMessage = "FirstName không được để trống")]
        [StringLength(100)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName không được để trống")]
        [StringLength(100)]
        public string LastName { get; set; }

        [EmailAddress(ErrorMessage = "Invalid email address")]
        [Required(ErrorMessage = "Email không được để trống")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password không được để trống")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm password không được để trống")]
        [Compare("Password", ErrorMessage = "Mật khẩu nhập lại không chính xác")]
        public string ConfirmPassword { get; set; }

        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Line 1 không được để trống")]
        [MaxLength(255)]
        public string Line1 { get; set; }

        [Required(ErrorMessage = "Province không được để trống")]
        [MaxLength(255)]
        public string Province { get; set; }

        [Required(ErrorMessage = "Country không được để trống")]
        [MaxLength(255)]
        public string Country { get; set; }
    }
}
