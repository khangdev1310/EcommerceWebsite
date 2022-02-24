using Ecommerce.Contracts.Dtos;
using Ecommerce.DataAccessor.Entities;


namespace Rookie.Ecom.Business
{
    public class AutoMapperProfile : AutoMapper.Profile
    {
        public AutoMapperProfile()
        {
            FromDataAccessorLayer();
            FromPresentationLayer();
        }

        private void FromPresentationLayer()
        {
            //Map từ Category Dto -> Category entity
            CreateMap<CategoryDto, Category>()
            //ForMember: Map các property của destinate -> src.
                .ForMember(d => d.Products, t => t.Ignore());
            CreateMap<ProductDto, Product>();

            CreateMap<ProductImageDto, ProductImage>();

            CreateMap<RatingDto, Rating>();

            CreateMap<OrderDto, Order>();

            CreateMap<OrderDetailDto, OrderDetail>();



        }

        private void FromDataAccessorLayer()
        {
            CreateMap<Category, CategoryDto>();

            CreateMap<Product, ProductDto>();

            CreateMap<ProductImage, ProductImageDto>();

            CreateMap<Order, OrderDto>();

            CreateMap<OrderDetail, OrderDetailDto>();

        }
    }
}
