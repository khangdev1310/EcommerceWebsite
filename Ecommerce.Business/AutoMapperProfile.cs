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
            CreateMap<CategoryDto, Category>(memberList: AutoMapper.MemberList.None)
            //ForMember: Map các property của destinate -> src.
                .ForMember(d => d.Products, t => t.Ignore());

            CreateMap<CreateCategoryDto, Category>(memberList: AutoMapper.MemberList.None);

            CreateMap<ProductDto, Product>(memberList: AutoMapper.MemberList.None);
            CreateMap<CreateProductDto, Product>(memberList: AutoMapper.MemberList.None);


            //Product image mapper
            CreateMap<ProductImageDto, ProductImage>(memberList: AutoMapper.MemberList.None);

            CreateMap<CreateProductImageDto, ProductImage>(memberList: AutoMapper.MemberList.None);

            CreateMap<RatingDto, Rating>();

            CreateMap<OrderDto, Order>()
                .ForMember(d => d.Details, t => t.Ignore());

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
