using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts;
using Ecommerce.Contracts.Constants;
using Ecommerce.Contracts.Dtos.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Ecommerce.Admin.Controllers
{
 
        [Authorize(Roles = "Admin")]
        [Route(Endpoints.User)]
        [ApiController]
        public class UserController : ControllerBase
        {
            private readonly IOrganicIdentityUserService _organicIdentityUserService;

            public UserController(IOrganicIdentityUserService metaIdentityUserService)
            {
                _organicIdentityUserService = metaIdentityUserService;
            }


            [HttpGet("find")]
            public async Task<PagedResponseModel<OrganicIdentityUserDto>>
                FindAsync(string name, int page = 1, int limit = 10) => await _organicIdentityUserService.PagedQueryAsync(name, page, limit);


        }

}
