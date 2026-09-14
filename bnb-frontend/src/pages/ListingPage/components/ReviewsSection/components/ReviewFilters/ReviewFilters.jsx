import './ReviewFilters.css';

const ReviewFilters = ({ tags }) => (
  <div className="review-filters">
    {tags.map((tag, i) => (
      <button key={i} className="review-filters__pill" type="button">
        <span className="review-filters__emoji">{tag.emoji}</span>
        <span>{tag.label}</span>
        <span className="review-filters__count">{tag.count}</span>
      </button>
    ))}
  </div>
);

export default ReviewFilters;
