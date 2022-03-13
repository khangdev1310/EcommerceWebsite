
using Ecommerce.DataAccessor.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Identity.Data
{
    public class AspNetIdentityDbContext : IdentityDbContext<EcommerceUser> 
    {
        public AspNetIdentityDbContext(DbContextOptions<AspNetIdentityDbContext> options)
        : base(options)
        {
        }
    }
}
