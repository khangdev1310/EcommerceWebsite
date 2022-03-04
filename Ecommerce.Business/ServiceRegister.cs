using Ecommerce.Business.Interfaces;
using Ecommerce.Business.Services;
using Ecommerce.DataAccessor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

using System.Reflection;


namespace Ecommerce.Business
{
    public static class ServiceRegister
    {
        public static void AddBusinessLayer(this IServiceCollection services, IConfiguration configuration )
        {
           services.AddDataAccessorLayer(configuration);
           services.AddAutoMapper(Assembly.GetExecutingAssembly());
           services.AddTransient<ICategoryService, CategoryService>();
           services.AddTransient<IProductService, ProductService>();
           services.AddTransient<IProductImageService, ProductImageService>();
           services.AddTransient<IOrderService, OrderService>();
        }
    }
}
