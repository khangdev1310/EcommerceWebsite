using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos;
using Ecommerce.Contracts.Dtos.Auth;
using Ecommerce.Contracts.Dtos.Order;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IOrganicIdentityUserService
    {

        Task<IdentityResult> Register(UserRegistrationDto request, string role);

        Task<OrganicIdentityUserDto> GetById(string id);

        Task<PagedResponseModel<OrganicIdentityUserDto>> PagedQueryAsync(string username, int page, int limit);

    }
}
