using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [Required]
        [Column("Image_url")]
        public string ImageUrl { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
