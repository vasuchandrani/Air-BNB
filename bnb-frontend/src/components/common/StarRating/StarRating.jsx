import { StarIcon } from '../../../assets/icons';
import './StarRating.css';

const StarRating = ({ rating, size = 12, showValue = false }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <span className="star-rating">
      {Array.from({ length: totalStars }, (_, i) => (
        <StarIcon
          key={i}
          size={size}
          filled={i < fullStars || (i === fullStars && hasHalf)}
          className={`star-rating__star ${i < fullStars || (i === fullStars && hasHalf) ? 'star-rating__star--filled' : 'star-rating__star--empty'}`}
        />
      ))}
      {showValue && <span className="star-rating__value">{rating}</span>}
    </span>
  );
};

export default StarRating;
