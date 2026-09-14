import './BookingCard.css';

const BookingCard = ({ listing }) => {
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="booking-sidebar">
      {/* Promo Banner Card (sticks with booking card) */}
      <div className="booking-promo-card">
        <span className="booking-promo-card__icon">🏷️</span>
        <div className="booking-promo-card__text">
          <span>{listing.promo.text}</span>
          <br />
          <a href="#" className="booking-promo-card__link" onClick={(e) => e.preventDefault()}>{listing.promo.linkText}</a>
        </div>
        <button type="button" className="booking-promo-card__claim" onClick={(e) => e.preventDefault()}>Claim</button>
      </div>

      {/* Main Booking Card Widget (sticky) */}
      <div className="booking-card" id="booking-widget">
        {/* Price */}
        <div className="booking-card__price">
          <span className="booking-card__price-amount">
            {listing.price.currency}{listing.price.amount.toLocaleString('en-IN')}
          </span>
          <span className="booking-card__price-label"> for {listing.price.nights} nights</span>
        </div>

        {/* Date & Guest Selector */}
        <div className="booking-card__selector">
          <div className="booking-card__dates">
            <div className="booking-card__date-field">
              <label className="booking-card__label">CHECK-IN</label>
              <span className="booking-card__date-value">{formatDate(listing.checkIn)}</span>
            </div>
            <div className="booking-card__date-divider" />
            <div className="booking-card__date-field">
              <label className="booking-card__label">CHECKOUT</label>
              <span className="booking-card__date-value">{formatDate(listing.checkOut)}</span>
            </div>
          </div>
          <div className="booking-card__guests">
            <label className="booking-card__label">GUESTS</label>
            <div className="booking-card__guests-value">
              <span>{listing.guests} guests</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4l4 4 4-4" /></svg>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <p className="booking-card__cancellation">
          Free cancellation before <strong>{listing.cancellationDate}</strong>
        </p>

        {/* Reserve Button */}
        <button type="button" className="btn-primary booking-card__reserve" onClick={(e) => e.preventDefault()}>Reserve</button>
        <p className="booking-card__note">You won't be charged yet</p>
      </div>
    </div>
  );
};

export default BookingCard;
