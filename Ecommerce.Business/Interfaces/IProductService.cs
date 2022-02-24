using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAllAsync();

        /*Task<PagedResponseModel<ProductDto>> PagedQueryAsync(string name, int page, int limit);*/

        Task<ProductDto> GetByIdAsync(Guid id);

        Task<ProductDto> GetByNameAsync(string name);

        Task<ProductDto> AddAsync(ProductDto ProductDto);

        Task DeleteAsync(Guid id);

        Task UpdateAsync(ProductDto ProductDto);
    }
}
