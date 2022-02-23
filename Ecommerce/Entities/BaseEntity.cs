﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.DataAccessor.Entities
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Column("Created_at")]
        public DateTime CreatedDate { get; set; }

        [Column("Updated_at")]
        public DateTime UpdatedDate { get; set; }

        [Column("Created_by")]
        public Guid? CreatorId { get; set; }
        [Column("Updated_by")]

        public Guid? UpdaterId { get; set; }
    }
}
