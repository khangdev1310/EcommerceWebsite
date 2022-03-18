using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Order;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IOrderService
    {
        Task<OrderDto> CreateOrder(CreateOrderDto createOrderDto);
        Task<List<OrderDto>> GetListOrderByUserIdAsync(string userId);
        Task<OrderDto> GetOrderByIdAsync(Guid id);
        Task<int> GetTotalOrderByUserId(string userId);

    }
}
