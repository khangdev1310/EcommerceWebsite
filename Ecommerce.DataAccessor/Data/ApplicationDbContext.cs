using Ecommerce.DataAccessor.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.DataAccessor.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Category>()
                .HasMany<Product>(e => e.Products)
                .WithOne(p => p.Category)
                .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder
                .Entity<Product>()
                .HasMany<ProductImage>(e => e.ProductImages)
                .WithOne(p => p.Product)
                .OnDelete(DeleteBehavior.ClientCascade);


        }

    }


}
