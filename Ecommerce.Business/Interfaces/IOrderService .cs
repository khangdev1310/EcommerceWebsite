using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDto>> GetAllAsync();

        /*Task<PagedResponseModel<OrderDto>> PagedQueryAsync(string name, int page, int limit);*/

        Task<OrderDto> GetByIdAsync(Guid id);

        Task<OrderDto> GetByStatusAsync(string name);

        Task<OrderDto> AddAsync(OrderDto OrderDto);

        Task DeleteAsync(Guid id);

        Task UpdateAsync(OrderDto OrderDto);
    }
}
