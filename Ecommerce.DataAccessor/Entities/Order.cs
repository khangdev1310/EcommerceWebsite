
using System.Collections.Generic;
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

        public ICollection<OrderDetail> Details { get; set; }
    }
}
