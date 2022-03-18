using Ecommerce.Contracts;
using Ecommerce.Contracts.Dtos.Order;
using Ecommerce.Contracts.Dtos.Rating;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Business.Interfaces
{
    public interface IRatingService
    {
        Task<RatingDto> AddRatingAsync(CreateRatingDto createProductRatingDto);
        Task<List<RatingDto>> AddRangeRatingAsync(List<CreateRatingDto> createProductRatingDtos);
        /*Task RemoveRatingAsync(Guid id);*/
        Task<RatingDto> GetRatingAsync(Guid id);
        Task<List<RatingDto>> GetListRatingByProductIdAsync(Guid productId);

        Task RatingAsync(UpdateRatingDto updateProductRatingDto);
        Task<int> GetTotalRatingByUserId(string userId);


    }
}
