import { ChevronRightIcon } from '../../../../assets/icons';
import './ThingsToKnow.css';

const ThingsToKnow = ({ listing }) => (
  <div className="things-to-know">
    <h2 className="things-to-know__title">Things to know</h2>
    <div className="things-to-know__columns">
      {/* House Rules */}
      <div className="things-to-know__column">
        <h3 className="things-to-know__heading">House rules</h3>
        <ul className="things-to-know__list">
          <li>Check-in: {listing.houseRules.checkInTime}</li>
          <li>Checkout: {listing.houseRules.checkOutTime}</li>
          <li>{listing.houseRules.maxGuests} guests maximum</li>
        </ul>
        <a href="#" className="things-to-know__link" onClick={(e) => e.preventDefault()}>
          <span>Show more</span>
          <ChevronRightIcon size={12} />
        </a>
      </div>

      {/* Safety & Property */}
      <div className="things-to-know__column">
        <h3 className="things-to-know__heading">Safety & property</h3>
        <ul className="things-to-know__list">
          <li>{listing.safety.carbonMonoxideAlarm}</li>
          <li>{listing.safety.smokeAlarm}</li>
          <li>{listing.safety.securityCameras}</li>
        </ul>
        <a href="#" className="things-to-know__link" onClick={(e) => e.preventDefault()}>
          <span>Show more</span>
          <ChevronRightIcon size={12} />
        </a>
      </div>

      {/* Cancellation Policy */}
      <div className="things-to-know__column">
        <h3 className="things-to-know__heading">Cancellation policy</h3>
        <ul className="things-to-know__list">
          <li>{listing.cancellationPolicy}</li>
        </ul>
        <a href="#" className="things-to-know__link" onClick={(e) => e.preventDefault()}>
          <span>Show more</span>
          <ChevronRightIcon size={12} />
        </a>
      </div>
    </div>
  </div>
);

export default ThingsToKnow;
