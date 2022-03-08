using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Constants;
using Ecommerce.Contracts.Dtos;
using EnsureThat;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Admin.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductImageService _productImageService;
        public ProductController(IProductService ProductService, IProductImageService ProductImageService)
        {
            _productService = ProductService;
            _productImageService = ProductImageService;
        }

        [HttpPost]
        public async Task<ActionResult<ProductDto>> CreateAsync([FromBody] CreateProductDto newProductDto)
        {
            Ensure.Any.IsNotNull(newProductDto, nameof(newProductDto));
            var asset = await _productService.AddAsync(newProductDto);
            for (int i = 0; i < newProductDto.ProductImageDtos.Count; i++)
            {
                newProductDto.ProductImageDtos.ElementAt(i).ProductId = asset.Id;
            }
            var productPictures = await _productImageService.AddRangeAsync(newProductDto.ProductImageDtos);

            foreach (var item in productPictures)
            {
                asset.ProductImages.Add(item);
            }

            return Created(Endpoints.Product, asset);

        }
        /*[HttpGet]
        public async Task<IEnumerable<ProductDto>> GetAsync() {
            return await _productService.GetAllAsync();
        }*/

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAssetAsync([FromRoute] Guid id)
        {
            var newProduct = await _productService.GetByIdAsync(id);
            Ensure.Any.IsNotNull(newProduct, nameof(newProduct));
            await _productService.DeleteAsync(id);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ProductDto> GetByIdAsync(Guid id)
            => await _productService.GetByIdAsync(id);

        [HttpGet("find")]
        public async Task<PagedResponseModel<ProductDto>>
            FindAsync(string name, int page = 1, int limit = 10)
            => await _productService.PagedQueryAsync(name, page, limit);

        [HttpPost("picture")]
        public async Task<ActionResult<IEnumerable<ProductImageDto>>> CreateProductPictureRangeAsync([FromBody] IEnumerable<CreateProductImageDto> newProductImageDtos)
        {
            Ensure.Any.IsNotNull(newProductImageDtos, nameof(newProductImageDtos));

            var asset = await _productImageService.AddRangeAsync(newProductImageDtos);
            return Created(Endpoints.Product, asset);
        }

        [HttpDelete("/soft/{id}")]
        public async Task<ActionResult> SoftDeleteProductAsync([FromRoute] Guid id)
        {
            var categoryItem = await _productService.GetByIdAsync(id);
            Ensure.Any.IsNotNull(categoryItem, nameof(categoryItem));
            await _productService.SoftDeleteAsync(id);
            return NoContent();
        }
    }
}
