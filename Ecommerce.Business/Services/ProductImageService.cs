using AutoMapper;
using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Ecommerce.DataAccessor.Entities;
using Ecommerce.DataAccessor.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Business.Services
{
    public class ProductImageService : IProductImageService
    {
        private readonly IBaseRepository<ProductImage> _baseRepository;
        private readonly IMapper _mapper;

        public ProductImageService(IBaseRepository<ProductImage> baseRepository, IMapper mapper)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
        }

        public async Task<ProductImageDto> AddAsync(ProductImageDto ProductImageDto)
        {
            var ProductImage = _mapper.Map<ProductImage>(ProductImageDto);
            var item = await _baseRepository.AddAsync(ProductImage);
            return _mapper.Map<ProductImageDto>(item);
        }

        public async Task DeleteAsync(Guid id)
        {
            await _baseRepository.DeleteAsync(id);
        }

        public async Task UpdateAsync(ProductImageDto ProductImageDto)
        {
            var ProductImage = _mapper.Map<ProductImage>(ProductImageDto);
            await _baseRepository.UpdateAsync(ProductImage);
        }

        public async Task<IEnumerable<ProductImageDto>> GetAllAsync()
        {
            var categories = await _baseRepository.GetAllAsync();
            return _mapper.Map<List<ProductImageDto>>(categories);
        }

        public async Task<ProductImageDto> GetByIdAsync(Guid id)
        {
            var ProductImage = await _baseRepository.GetByIdAsync(id);
            return _mapper.Map<ProductImageDto>(ProductImage);
        }

        public async Task<ProductImageDto> GetByImageUrlAsync(string url)
        {
            var ProductImage = await _baseRepository.GetByAsync(x => x.ImageUrl == url);
            return _mapper.Map<ProductImageDto>(ProductImage);
        }


        public async Task<IEnumerable<ProductImageDto>> AddRangeAsync(IEnumerable<CreateProductImageDto> items)
        {
            if (items == null)
            {
                throw new ArgumentNullException(nameof(items));
            }

            if (!items.Any())
            {
                return null;
            }

            var productPictures = _mapper.Map<IEnumerable<ProductImage>>(items);
            var itemProductPictures = await _baseRepository.AddRangeAsync(productPictures);

            return _mapper.Map<IEnumerable<ProductImageDto>>(itemProductPictures);
        }
            
        public async Task RemoveRangeAsync(IEnumerable<ProductImageDto> productPictures)
        {
            await _baseRepository.RemoveRangeAsync(_mapper.Map<IEnumerable<ProductImage>>(productPictures));
        }
    }
}
