using AutoMapper;
using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos.Auth;
using Ecommerce.DataAccessor.Entities;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Business.Services
{
    public class OrganicIdentityUserService : IOrganicIdentityUserService
    {
        private readonly UserManager<EcommerceUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IMapper _mapper;
        public OrganicIdentityUserService(UserManager<EcommerceUser> userManager, RoleManager<IdentityRole> roleManager, IMapper mapper)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
        }

        public async Task<OrganicIdentityUserDto> GetById(string id)
        {
            EcommerceUser user = await _userManager.FindByIdAsync(id);
            if (user == null)
                return null;
            return _mapper.Map<OrganicIdentityUserDto>(user);
        }
        public async Task<PagedResponseModel<OrganicIdentityUserDto>> PagedQueryAsync(string username, int page, int limit)
        {
            var query = _userManager.Users;
            query = query.Where(x => string.IsNullOrEmpty(username) || x.UserName.Contains(username));

            query = query.OrderBy(x => x.UserName);

            var assets = await query
                .AsNoTracking()
                .PaginateAsync(page, limit);

            IEnumerable<OrganicIdentityUserDto> users = _mapper.Map<IEnumerable<OrganicIdentityUserDto>>(assets.Items);

            List<OrganicIdentityUserDto> listUsers = users.ToList();
            for (int i = 0; i < listUsers.Count; i++)
            {
                var tmp = _mapper.Map<EcommerceUser>(listUsers[i]);
                var roles = await _userManager.GetRolesAsync(tmp);
                listUsers[i].Roles = roles.ToList();
            }
            return new PagedResponseModel<OrganicIdentityUserDto>
            {
                CurrentPage = assets.CurrentPage,
                TotalPages = assets.TotalPages,
                TotalItems = assets.TotalItems,
                Items = listUsers.AsEnumerable()
            };
        }

        public async Task<IdentityResult> Register(UserRegistrationDto request, string role)
        {
            var userCheck = await _userManager.FindByEmailAsync(request.Email);
            var roleCheck = await _roleManager.FindByNameAsync(role);
            if (userCheck != null)
            {
                return IdentityResult.Failed(
                    new IdentityError[] {
                      new IdentityError{
                         Code = "0001",
                         Description = "This email used"
                      }
                    }
                    );
            }
            else if (roleCheck == null)
            {
                return IdentityResult.Failed(
                   new IdentityError[] {
                      new IdentityError{
                         Code = "0002",
                         Description = "This role doesn't exist"
                      }
                   }
                   );
            }
            else
            {

                var user = _mapper.Map<EcommerceUser>(request);
                user.PhoneNumberConfirmed = user.EmailConfirmed = true;
                user.UserName = user.NormalizedUserName = user.Email;

                var result = await _userManager.CreateAsync(user, request.Password);


                result = _userManager.AddToRoleAsync(user, role).Result;

                result =
                _userManager.AddClaimsAsync(
                    user,
                    new Claim[]
                    {
                            new Claim(JwtClaimTypes.Email, user.Email),
                            new Claim(JwtClaimTypes.Name, user.FirstName),
                            new Claim(JwtClaimTypes.GivenName, user.FirstName),
                            new Claim(JwtClaimTypes.FamilyName, user.LastName),
                            new Claim(JwtClaimTypes.Role, role)
                    }
                ).Result;
                return result;
            }

        }
    }

}





