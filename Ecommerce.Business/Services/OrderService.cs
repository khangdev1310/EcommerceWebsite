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
    public class OrderService : IOrderService
    {
        private readonly IBaseRepository<Order> _baseRepository;
        private readonly IMapper _mapper;

        public OrderService(IBaseRepository<Order> baseRepository, IMapper mapper)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
        }

        public async Task<OrderDto> AddAsync(OrderDto OrderDto)
        {
            var Order = _mapper.Map<Order>(OrderDto);
            var item = await _baseRepository.AddAsync(Order);
            return _mapper.Map<OrderDto>(item);
        }

        public async Task DeleteAsync(Guid id)
        {
            await _baseRepository.DeleteAsync(id);
        }

        public async Task UpdateAsync(OrderDto OrderDto)
        {
            var Order = _mapper.Map<Order>(OrderDto);
            await _baseRepository.UpdateAsync(Order);
        }

        public async Task<IEnumerable<OrderDto>> GetAllAsync()
        {
            var categories = await _baseRepository.GetAllAsync();
            return _mapper.Map<List<OrderDto>>(categories);
        }

        public async Task<OrderDto> GetByIdAsync(Guid id)
        {
            // map roles and users: collection (roleid, userid)
            // upsert: delete, update, insert
            // input vs db
            // input-y vs db-no => insert
            // input-n vs db-yes => delete
            // input-y vs db-y => update
            // unique, distinct, no-duplicate
            var Order = await _baseRepository.GetByIdAsync(id);
            return _mapper.Map<OrderDto>(Order);
        }

        public async Task<OrderDto> GetByStatusAsync(string name)
        {
            var Order = await _baseRepository.GetByAsync(x => x.Status == name);
            return _mapper.Map<OrderDto>(Order);
        }

        

    }
}
