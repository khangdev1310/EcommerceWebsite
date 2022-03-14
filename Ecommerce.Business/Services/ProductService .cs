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
    public class ProductService : IProductService
    {
        private readonly IBaseRepository<Product> _baseRepository;
        private readonly IMapper _mapper;

        public ProductService(IBaseRepository<Product> baseRepository, IMapper mapper)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
        }

        public async Task<ProductDto> AddAsync(CreateProductDto ProductDto)
        {
            if(ProductDto == null)
            {
                throw new ArgumentNullException(nameof(ProductDto));
            }

            var Product = _mapper.Map<Product>(ProductDto);
            var item = await _baseRepository.AddAsync(Product);
            return _mapper.Map<ProductDto>(item);
        }

        public async Task DeleteAsync(Guid id)
        {
            await _baseRepository.DeleteAsync(id);
        }

        public async Task UpdateAsync(UpdateProductDto ProductDto)
        {
            var Product = _mapper.Map<Product>(ProductDto);
            await _baseRepository.UpdateAsync(Product);
        }

        public async Task<IEnumerable<ProductDto>> GetAllAsync()
        {
            var categories = await _baseRepository.GetAllAsync();
            return _mapper.Map<List<ProductDto>>(categories);
        }

        public async Task<ProductDto> GetByIdAsync(Guid id)
        {
            IQueryable<Product> query = _baseRepository.Entities;
            query = query.Where(Product => Product.Id == id).Include(p => p.Category).Include(p => p.ProductImages).OrderBy(p => p.Name);   
            Product product = await query.FirstOrDefaultAsync();
            return _mapper.Map<ProductDto>(product);
        }

        public async Task<ProductDto> GetByNameAsync(string name)
        {
            var Product = await _baseRepository.GetByAsync(x => x.Name == name);
            return _mapper.Map<ProductDto>(Product);
        }


        public async Task<PagedResponseModel<ProductDto>> PagedQueryAsync(string name, int page, int limit)
        {
            var query = _baseRepository.Entities;

            query = query.Include(x => x.Category).Where(x => string.IsNullOrEmpty(name) || x.Name.Contains(name) || x.Category.Name.Contains(name) );
                
                /*.Where(x => x.Category.Name.Contains(name));*/
            query = query.Include(x => x.Category).Include(c => c.ProductImages);

            query = query.OrderBy(x => x.Name);

            var assets = await query
                .AsNoTracking()
                .PaginateAsync(page, limit);

            return new PagedResponseModel<ProductDto>
            {
                CurrentPage = assets.CurrentPage,
                TotalPages = assets.TotalPages,
                TotalItems = assets.TotalItems,
                Items = _mapper.Map<IEnumerable<ProductDto>>(assets.Items)
            };
        }
        public async Task SoftDeleteAsync(Guid id)
        {
            await _baseRepository.SoftDeleteAsync(id);
        }

        public async Task<List<ProductDto>> GetRelatedProduct(Guid categoryId,int num)
        {
            var query = _baseRepository.Entities;
            List<Product> products = await query.Where(p=> p.CategoryId == categoryId).Include(p => p.Category).Include(p => p.ProductImages).OrderByDescending(p => p.Price).Take(num).ToListAsync();
            return _mapper.Map<List<ProductDto>>(products);
        }

        public async Task<List<ProductDto>> GetLatestProduct(int num)
        {
            var query = _baseRepository.Entities;
            List<Product> products = await query.Include(p => p.Category).Include(p => p.ProductImages).OrderByDescending(p => p.CreatedDate).Take(num).ToListAsync();
            return _mapper.Map<List<ProductDto>>(products);
        }


    }
}
