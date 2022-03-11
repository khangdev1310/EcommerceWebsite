using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos
{
    public class ProductItemCartDto
    {
        public ProductDto Product { get; set; }
        [Required]
        [Range(1,int.MaxValue,ErrorMessage = "Số lượng sản phẩm phải lớn hơn 1")]
        public int Quantity { get; set; }
        
    }
}
