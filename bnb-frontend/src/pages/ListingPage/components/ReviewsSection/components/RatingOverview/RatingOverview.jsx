import './RatingOverview.css';

const RatingOverview = ({ reviews }) => (
  <div className="rating-overview">
    <div className="rating-overview__display">
      <img src="/images/laurel_left.png" alt="" className="rating-overview__laurel rating-overview__laurel--left" />
      <span className="rating-overview__score">{reviews.overallRating}</span>
      <img src="/images/laurel_right.png" alt="" className="rating-overview__laurel rating-overview__laurel--right" />
    </div>
    <h2 className="rating-overview__label">Guest favourite</h2>
    <p className="rating-overview__description">
      This home is a guest favourite based on ratings, reviews and reliability
    </p>
    <a href="#" className="rating-overview__how-link" onClick={(e) => e.preventDefault()}>How reviews work</a>
  </div>
);

export default RatingOverview;
