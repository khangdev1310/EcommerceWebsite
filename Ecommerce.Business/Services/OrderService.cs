using AutoMapper;
using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.DataAccessor.Entities;
using Ecommerce.DataAccessor.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Business.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBaseRepository<Order> _baseRepository;
        private readonly IMapper _mapper;

        public OrderService(IBaseRepository<Order> baseRepository, IMapper mapper)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
        }

        public async Task<OrderDto> CreateOrder(CreateOrderDto createOrderDto)
        {
            if(createOrderDto == null)
            {
                throw new ArgumentNullException(nameof(CreateOrderDto));
            }
            Order order = _mapper.Map<Order>(createOrderDto);
            order = await _baseRepository.AddAsync(order);

            return  _mapper.Map<OrderDto>(order);

        }
        public async Task<List<OrderDto>> GetListOrderByUserIdAsync(string userId)
        {
            var query = _baseRepository.Entities;
            query = query.Where(o => o.CreatedBy == userId);
            if (query.Count() > 0)
            {
                query = query.Include(o => o.OrderDetails)
                    .ThenInclude(p => p.Rating)
                    .Include(o => o.OrderDetails).ThenInclude(p => p.Product).ThenInclude(m => m.ProductImages);
                return _mapper.Map<List<OrderDto>>(await query.ToListAsync());

            }

            return null;
        }

        public async Task<OrderDto> GetOrderByIdAsync(Guid id)
        {
            var query = _baseRepository.Entities;

            query = query.Where(o => o.Id == id)
                .Include(o => o.OrderDetails)
                .ThenInclude(x => x.Rating)
                .Include(o => o.OrderDetails)
                .ThenInclude(p => p.Product)
                .ThenInclude(p => p.ProductImages);

            if (query == null)
                return null;
            return _mapper.Map<OrderDto>(await query.FirstOrDefaultAsync());
        }

    }
}
