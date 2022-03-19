using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Auth
{
    public class RegisterModel : PageModel
    {
        private readonly IOrganicIdentityUserService _organicIdentityUserService;

        public RegisterModel(IOrganicIdentityUserService organicIdentityUserService)
        {
            _organicIdentityUserService = organicIdentityUserService;
        }

        [BindProperty]
        public UserRegistrationDto UserRegistration { get; set; }

        

        public IActionResult OnGet()
        {
            return Page();
        }

        public async Task<IActionResult> OnPostRegister()
        {
            if (ModelState.IsValid)
            {
                var result = await _organicIdentityUserService.Register(UserRegistration, "Customer");


                if (result.Succeeded)
                {
                    
                    return RedirectToPage("/Auth/Login");
                }
                else
                {
                    if (result.Errors != null)
                    {
                        foreach (var error in result.Errors)
                        {
                            ModelState.AddModelError("message", error.Description);
                        }
                    }

                }

            }
            return Page();
        }
    }
}
