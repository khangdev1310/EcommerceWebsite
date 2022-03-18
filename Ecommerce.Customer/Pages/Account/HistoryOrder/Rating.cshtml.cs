using Ecommerce.Business.Interfaces;
using Ecommerce.Contracts.Dtos.Rating;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Threading.Tasks;

namespace Ecommerce.Customer.Pages.Account.HistoryOrder
{
    public class DetailModel : PageModel
    {
        private readonly IRatingService _ratingService;
        public DetailModel(IRatingService ratingService)
        {
            _ratingService = ratingService;
        }

        public RatingDto Rating { get; set; }
        public Guid idRoute { get; set; }
        
        public async Task<IActionResult> OnGet(Guid id)
        {
            Rating = await _ratingService.GetRatingAsync(id);
            idRoute = id;
            if (Rating == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(Guid id, float Rating, string Comment)
        {
            this.Rating = await _ratingService.GetRatingAsync(id);


            if (this.Rating == null)
            {
                return NotFound();
            }
            if (!this.Rating.IsRated)
            {
                UpdateRatingDto updateRatingDto = new UpdateRatingDto()
                {
                    Id = id,
                    Star = Rating,
                    Comment = Comment,
                    UpdateDate = DateTime.Now,
                    IsRated = true
                };
                await _ratingService.RatingAsync(updateRatingDto);
               
            }

            return RedirectToPage("/Home/Index");
        }
    }
}
