using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.DataAccessor.Entities
{
    public class Category : BaseEntity
    {
        [Required]
        [StringLength(maximumLength: 50)]
        public string Name { get; set; }

        [Required]
        [StringLength(maximumLength: 255)]
        public string Desc { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
