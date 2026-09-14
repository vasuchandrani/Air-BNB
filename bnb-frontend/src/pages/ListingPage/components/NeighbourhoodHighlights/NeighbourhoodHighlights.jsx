import { ChevronRightIcon } from '../../../../assets/icons';
import './NeighbourhoodHighlights.css';

const NeighbourhoodHighlights = ({ listing }) => (
  <div className="neighbourhood">
    <h2 className="neighbourhood__title">Neighbourhood highlights</h2>
    <p className="neighbourhood__text">{listing.neighbourhood}</p>
    <a href="#" className="neighbourhood__show-more" onClick={(e) => e.preventDefault()}>
      <span>Show more</span>
      <ChevronRightIcon size={12} />
    </a>
  </div>
);

export default NeighbourhoodHighlights;
