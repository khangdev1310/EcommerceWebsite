using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IProductImageService
    {
        Task<IEnumerable<ProductImageDto>> GetAllAsync();


        Task<ProductImageDto> GetByIdAsync(Guid id);

        Task<ProductImageDto> GetByImageUrlAsync(string url);

        Task<ProductImageDto> AddAsync(ProductImageDto ProductDto);

        Task DeleteAsync(Guid id);

        Task UpdateAsync(ProductImageDto ProductDto);
        Task<IEnumerable<ProductImageDto>> AddRangeAsync(IEnumerable<CreateProductImageDto> items);
        Task RemoveRangeAsync(IEnumerable<ProductImageDto> productPictures);
    }
}
