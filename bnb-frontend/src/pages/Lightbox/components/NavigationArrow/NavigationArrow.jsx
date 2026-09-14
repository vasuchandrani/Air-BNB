import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/icons';
import './NavigationArrow.css';

const NavigationArrow = ({ direction, onClick }) => (
  <button
    className={`nav-arrow nav-arrow--${direction}`}
    onClick={onClick}
    type="button"
    aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
  >
    {direction === 'prev' ? <ChevronLeftIcon size={16} /> : <ChevronRightIcon size={16} />}
  </button>
);

export default NavigationArrow;
