using AutoMapper;
using Ecommerce.Business.Services;
using Ecommerce.Contracts.Dtos;
using Ecommerce.DataAccessor.Entities;
using Ecommerce.DataAccessor.Interfaces;
using FluentAssertions;
using Moq;
using Rookie.Ecom.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Ecommerce.UnitTests.Business
{
    public class CategoryServiceShould
    {
        private readonly CategoryService _categoryService;
        private readonly Mock<IBaseRepository<Category>> _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryServiceShould()
        {
            _categoryRepository = new Mock<IBaseRepository<Category>>();

            var config = new MapperConfiguration(cfg => cfg.AddProfile<AutoMapperProfile>());
            _mapper = config.CreateMapper();

            _categoryService = new CategoryService(
                    _categoryRepository.Object,
                    _mapper
                );
        }

        [Fact]
        public async Task GetAsyncShouldReturnNullAsync()
        {
            var id = Guid.NewGuid();
            _categoryRepository
                  .Setup(x => x.GetByIdAsync(id))
                  .Returns(Task.FromResult<Category>(null));

            var result = await _categoryService.GetByIdAsync(id);
            result.Should().BeNull();
        }

        [Fact]
        public async Task GetAsyncShouldReturnObjectAsync()
        {
            var entity = new Category()
            {
                Desc = "code",
                Id = Guid.NewGuid(),
                Name = "Name"
            };

            _categoryRepository.Setup(x => x.GetByIdAsync(entity.Id)).Returns(Task.FromResult(entity));
            var result = await _categoryService.GetByIdAsync(entity.Id);
            result.Should().NotBeNull();
            result.Id.Should().Be(entity.Id);

            _categoryRepository.Verify(mock => mock.GetByIdAsync(entity.Id), Times.Once);
        }

        [Fact]
        public async Task AddCategoryShouldThrowExceptionAsync()
        {
            Func<Task> act = async () => await _categoryService.AddAsync(null);
            await act.Should().ThrowAsync<ArgumentNullException>();
        }

        [Fact]
        public async Task AddCategoryShouldBeSuccessfullyAsync()
        {
            var category = new Category()
            {
                Desc = "code",
                Id = Guid.NewGuid(),
                Name = "name"
            };

            var categoryDto = new CreateCategoryDto()
            {
                Desc = "code",
                ImageUrl = "stringUrl",
                Name = "name"
            };
            _categoryRepository.Setup(x => x
                .GetByAsync(It.IsAny<Expression<Func<Category, bool>>>(), It.IsAny<string>()))
                .Returns(Task.FromResult<Category>(category));

            _categoryRepository.Setup(x => x.AddAsync(It.IsAny<Category>())).Returns(Task.FromResult(category));

            var result = await _categoryService.AddAsync(categoryDto);

            result.Should().NotBeNull();

            _categoryRepository.Verify(mock => mock.AddAsync(It.IsAny<Category>()), Times.Once());
        }
    }
}
