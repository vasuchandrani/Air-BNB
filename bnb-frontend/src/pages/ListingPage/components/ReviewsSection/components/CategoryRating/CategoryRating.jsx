import { CleanlinessIcon, AccuracyIcon, CheckInIcon, CommunicationIcon, LocationIcon, ValueIcon } from '../../../../../../assets/icons';
import './CategoryRating.css';

const ICON_MAP = { cleanliness: CleanlinessIcon, accuracy: AccuracyIcon, checkin: CheckInIcon, communication: CommunicationIcon, location: LocationIcon, value: ValueIcon };

const CategoryRating = ({ label, value, icon }) => {
  const IconComponent = ICON_MAP[icon] || CleanlinessIcon;
  return (
    <div className="category-rating">
      <h3 className="category-rating__label">{label}</h3>
      <span className="category-rating__value">{value.toFixed(1)}</span>
      <IconComponent size={32} className="category-rating__icon" />
    </div>
  );
};

export default CategoryRating;
