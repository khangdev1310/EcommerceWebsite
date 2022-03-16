using AutoMapper;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.Contracts.Dtos.Rating;
using Ecommerce.DataAccessor.Entities;
using Ecommerce.DataAccessor.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Business.Services
{
    public class OrderDetailService
    {
        private readonly IBaseRepository<OrderDetail> _baseRepository;
        private readonly IMapper _mapper;

        public OrderDetailService(IBaseRepository<OrderDetail> baseRepository, IMapper mapper)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
        }

        public async Task<OrderDetailDto> AddOrderDetailAsync(CreateOrderDetailDto CreateOrderDetailDto)
        {
            if (CreateOrderDetailDto == null)
                throw new ArgumentNullException(nameof(CreateOrderDetailDto));
            OrderDetail orderItem = _mapper.Map<OrderDetail>(CreateOrderDetailDto);
            orderItem = await _baseRepository.AddAsync(orderItem);
            return _mapper.Map<OrderDetailDto>(orderItem);
        }

        public async Task<List<OrderDetailDto>> AddRangeOrderDetailsAsync(List<CreateOrderDetailDto> createOrderItemDtos)
        {
            IEnumerable<OrderDetail> orderItems = _mapper.Map<IEnumerable<OrderDetail>>(createOrderItemDtos);
            orderItems = await _baseRepository.AddRangeAsync(orderItems);
            return _mapper.Map<List<OrderDetailDto>>(orderItems.ToList());
        }

        public async Task<List<RatingDto>> GetListRatingByProductIdAsync(Guid productId)
        {
            var query = _baseRepository.Entities;
            query = query.Where(x => x.ProductId == productId)
                .Include(o => o.Product)
                .Include(o => o.Rating);
            return _mapper.Map<List<RatingDto>>(await query.Select(x => x.Rating).ToListAsync());
        }


    }
}
