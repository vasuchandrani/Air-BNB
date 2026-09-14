import { StarIcon, LaurelLeftIcon, LaurelRightIcon } from '../../../../assets/icons';
import './GuestFavourite.css';

const GuestFavourite = ({ listing }) => {
  if (!listing.isGuestFavourite) return null;

  return (
    <div className="guest-favourite">
      <div className="guest-favourite__badge">
        <div className="guest-favourite__left">
          <LaurelLeftIcon size={26} />
          <div className="guest-favourite__label">
            <span className="guest-favourite__label-text">Guest</span>
            <span className="guest-favourite__label-text">favourite</span>
          </div>
          <LaurelRightIcon size={26} />
        </div>

        <p className="guest-favourite__description">{listing.guestFavouriteText}</p>

        <div className="guest-favourite__stats">
          <div className="guest-favourite__rating">
            <span className="guest-favourite__rating-value">{listing.rating}</span>
            <div className="guest-favourite__stars">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} size={10} filled />
              ))}
            </div>
          </div>

          <div className="guest-favourite__divider" />

          <div className="guest-favourite__reviews">
            <span className="guest-favourite__review-count">{listing.reviewCount}</span>
            <span className="guest-favourite__review-label">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestFavourite;
