import { useState } from 'react';
import Avatar from '../../../../../../components/common/Avatar/Avatar';
import StarRating from '../../../../../../components/common/StarRating/StarRating';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const text = review.text;
  const isLong = text.length > 200;
  const displayText = !expanded && isLong ? text.slice(0, 200) + '...' : text;

  return (
    <div className="review-card">
      <div className="review-card__header">
        <Avatar src={review.author.avatar} initial={review.author.initial} alt={review.author.name} size={40} color={review.author.avatarColor} />
        <div className="review-card__author">
          <h4 className="review-card__name">{review.author.name}</h4>
          <p className="review-card__duration">{review.author.duration}</p>
        </div>
      </div>
      <div className="review-card__meta">
        <StarRating rating={review.rating} size={10} />
        <span className="review-card__dot">·</span>
        <span className="review-card__date">{review.date}</span>
      </div>
      <p className="review-card__text">{displayText}</p>
      {isLong && (
        <button className="review-card__show-more" onClick={() => setExpanded(!expanded)} type="button">
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
