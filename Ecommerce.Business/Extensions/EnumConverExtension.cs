using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Business.Extensions
{
    public static class EnumConverExtension
    {
        public static string GetNameString<T>(this T enumType) where T : Enum
        {
            return Enum.GetName(typeof(T), enumType);
        }
    }
}
