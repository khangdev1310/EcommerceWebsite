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
    public class ProductServiceShould
    {
        private readonly ProductService _productService;
        private readonly Mock<IBaseRepository<Product>> _productRepository;
        private readonly IMapper _mapper;

        public ProductServiceShould()
        {
            _productRepository = new Mock<IBaseRepository<Product>>();

            var config = new MapperConfiguration(cfg => cfg.AddProfile<AutoMapperProfile>());
            _mapper = config.CreateMapper();

            _productService = new ProductService(
                    _productRepository.Object,
                    _mapper
                );
        }

        [Fact]
        public async Task AddProductShouldThrowExceptionAsync()
        {
            Func<Task> act = async () => await _productService.AddAsync(null);
            await act.Should().ThrowAsync<ArgumentNullException>();
        }

        [Fact]
        public async Task AddProductShouldBeSuccessfullyAsync()
        {
            var category = new Category()
            {
                Name = "abc",
                Desc = "xyz",
                ImageUrl = "gaga"
            };

            var product = new Product()
            {
                Name = "product",
                Price = 20,
                Desc = "ProductShortDesc>",
                Quantity = 1,
                CategoryId = category.Id
            };

            var newProductDto = new CreateProductDto()
            {
                Name = "product 2",
                Desc = "ProductShortDesc>",
                Price = 20,
                Quantity = 100,
                CategoryId = category.Id
            };
            _productRepository.Setup(x => x
                .GetByAsync(It.IsAny<Expression<Func<Product, bool>>>(), It.IsAny<string>()))
                .Returns(Task.FromResult<Product>(product));

            _productRepository.Setup(x => x.AddAsync(It.IsAny<Product>())).Returns(Task.FromResult(product));

            var result = await _productService.AddAsync(newProductDto);

            result.Should().NotBeNull();

            _productRepository.Verify(mock => mock.AddAsync(It.IsAny<Product>()), Times.Once());
        }


    }
}
