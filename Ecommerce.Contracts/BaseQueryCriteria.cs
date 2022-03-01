using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts
{
    public class BaseQueryCriteria
    {
        public int Limit { get; set; } = 10;
        public int Page { get; set; } = 1;
    }
}
