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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<ActionResult<CategoryDto>> CreateAsync([FromBody] CreateCategoryDto categoryDto)
        {
            Ensure.Any.IsNotNull(categoryDto, nameof(categoryDto));
            var asset = await _categoryService.AddAsync(categoryDto);
            return Created(Endpoints.Category, asset);
            
        }
        [HttpGet]
        public async Task<IEnumerable<CategoryDto>> GetAsync() { 
            return await _categoryService.GetAllAsync();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAssetAsync([FromRoute] Guid id)
        {
            var categoryDto = await _categoryService.GetByIdAsync(id);
            Ensure.Any.IsNotNull(categoryDto, nameof(categoryDto));
            await _categoryService.DeleteAsync(id);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<CategoryDto> GetByIdAsync(Guid id)
            => await _categoryService.GetByIdAsync(id);

        [HttpGet("find")]
        public async Task<PagedResponseModel<CategoryDto>>
            FindAsync(string name, int page = 1, int limit = 10)
            => await _categoryService.PagedQueryAsync(name, page, limit);
    }
}
