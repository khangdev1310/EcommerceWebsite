using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.DataAccessor.Entities
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Column("Created_at")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;

        [Column("Updated_at")]
        public DateTime UpdatedDate { get; set; } = DateTime.Now;

        [Column("Created_by")]
        public string? CreatedBy { get; set; }
        [Column("Updated_by")]
        public string? UpdatedBy { get; set; }
    }
}
