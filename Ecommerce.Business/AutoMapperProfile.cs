using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Auth;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.Contracts.Dtos.Rating;
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

            //Category
            CreateMap<CreateCategoryDto, Category>(memberList: AutoMapper.MemberList.None);
            CreateMap<UpdateCategoryDto, Category>(memberList: AutoMapper.MemberList.None);

            //Product
            CreateMap<ProductDto, Product>(memberList: AutoMapper.MemberList.None);
            CreateMap<CreateProductDto, Product>(memberList: AutoMapper.MemberList.None);
            CreateMap<UpdateProductDto, Product>(memberList: AutoMapper.MemberList.None);


            //Product image mapper
            CreateMap<ProductImageDto, ProductImage>(memberList: AutoMapper.MemberList.None);

            CreateMap<CreateProductImageDto, ProductImage>(memberList: AutoMapper.MemberList.None);
            


            //Order
            CreateMap<CreateOrderDto, Order>(memberList: AutoMapper.MemberList.None);
            CreateMap<OrderDto, Order>(memberList: AutoMapper.MemberList.None);

            //OrderDetail
            CreateMap<CreateOrderDetailDto, OrderDetail>(memberList: AutoMapper.MemberList.None);
            CreateMap<OrderDetailDto, OrderDetail>(memberList: AutoMapper.MemberList.None);


            //Rating
            CreateMap<CreateRatingDto, Rating>(memberList: AutoMapper.MemberList.None);
            CreateMap<UpdateRatingDto, Rating>(memberList: AutoMapper.MemberList.None);
            CreateMap<RatingDto, Rating>(memberList: AutoMapper.MemberList.None);
            CreateMap<RatingDto, UpdateRatingDto>(memberList: AutoMapper.MemberList.None);

            //Auth
            CreateMap<OrganicIdentityUserDto, EcommerceUser>(memberList: AutoMapper.MemberList.None);
            CreateMap<UserRegistrationDto, EcommerceUser>(memberList: AutoMapper.MemberList.None);

        }

        private void FromDataAccessorLayer()
        {
            CreateMap<Category, CategoryDto>();

            CreateMap<Product, ProductDto>();

            CreateMap<ProductImage, ProductImageDto>();

            CreateMap<Order, OrderDto>();

            CreateMap<OrderDetail, OrderDetailDto>();

            CreateMap<Rating, RatingDto>();

            CreateMap<EcommerceUser, OrganicIdentityUserDto>();
        }
    }
}
