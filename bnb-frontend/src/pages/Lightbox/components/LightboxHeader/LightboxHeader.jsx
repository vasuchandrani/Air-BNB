import { CloseIcon, GridIcon } from '../../../../assets/icons';
import './LightboxHeader.css';

const LightboxHeader = ({ currentIndex, totalPhotos, categoryName, onClose, onBackToTour }) => (
  <div className="lightbox-header">
    <button className="lightbox-header__btn" onClick={onBackToTour} type="button" aria-label="Back to photo tour">
      <GridIcon size={16} />
    </button>
    <div className="lightbox-header__info">
      <span className="lightbox-header__title">{categoryName}</span>
    </div>
    <div className="lightbox-header__right">
      <span className="lightbox-header__counter">{currentIndex + 1} of {totalPhotos}</span>
      <button className="lightbox-header__btn" onClick={onClose} type="button" aria-label="Close">
        <CloseIcon size={16} />
      </button>
    </div>
  </div>
);

export default LightboxHeader;
