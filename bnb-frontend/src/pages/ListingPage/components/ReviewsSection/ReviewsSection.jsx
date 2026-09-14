import RatingOverview from './components/RatingOverview/RatingOverview';
import CategoryRating from './components/CategoryRating/CategoryRating';
import ReviewFilters from './components/ReviewFilters/ReviewFilters';
import ReviewCard from './components/ReviewCard/ReviewCard';
import './ReviewsSection.css';

const ReviewsSection = ({ reviews }) => {
  if (!reviews) return null;

  return (
    <div className="reviews-section">
      <RatingOverview reviews={reviews} />

      <div className="reviews-section__categories">
        <div className="reviews-section__overall">
          <h3 className="reviews-section__category-title">Overall rating</h3>
          <div className="reviews-section__bars">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="reviews-section__bar-row">
                <span className="reviews-section__bar-label">{star}</span>
                <div className="reviews-section__bar-track">
                  <div
                    className="reviews-section__bar-fill"
                    style={{ width: `${(reviews.ratingDistribution[star] / reviews.totalReviews) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <CategoryRating label="Cleanliness" value={reviews.categories.cleanliness} icon="cleanliness" />
        <CategoryRating label="Accuracy" value={reviews.categories.accuracy} icon="accuracy" />
        <CategoryRating label="Check-in" value={reviews.categories.checkIn} icon="checkin" />
        <CategoryRating label="Communication" value={reviews.categories.communication} icon="communication" />
        <CategoryRating label="Location" value={reviews.categories.location} icon="location" />
        <CategoryRating label="Value" value={reviews.categories.value} icon="value" />
      </div>

      <ReviewFilters tags={reviews.filterTags} />

      <div className="reviews-section__grid">
        {reviews.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
