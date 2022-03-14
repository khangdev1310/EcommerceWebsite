using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Auth
{
    [Authorize]
    public class LoginModel : PageModel
    {
        public IActionResult OnGet()
        {
            return Redirect("/Home");
        }
    }
}
