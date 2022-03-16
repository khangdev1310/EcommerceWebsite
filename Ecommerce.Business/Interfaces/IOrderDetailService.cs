using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.Contracts.Dtos.Rating;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IOrderDetailService
    {
        Task<OrderDetailDto> AddOrderDetailAsync(CreateOrderDetailDto createOrderDto);
        Task<List<OrderDetailDto>> AddRangeOrderDetailsAsync(List<CreateOrderDetailDto> createOrderDetailDtos);
        Task<OrderDetailDto> GetOrderDetailByIdAsync(Guid id);

        Task<List<RatingDto>> GetListRatingByProductIdAsync(Guid productId);

    }
}
