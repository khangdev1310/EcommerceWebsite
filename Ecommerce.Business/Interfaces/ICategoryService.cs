using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<CategoryDto>> GetAllAsync();

        Task<PagedResponseModel<CategoryDto>> PagedQueryAsync(string name, int page, int limit);

        Task<CategoryDto> GetByIdAsync(Guid id);

        Task<CategoryDto> GetByNameAsync(string name);

        Task<CategoryDto> AddAsync(CreateCategoryDto categoryDto);

        Task DeleteAsync(Guid id);

        Task UpdateAsync(CategoryDto categoryDto);
    }
}
