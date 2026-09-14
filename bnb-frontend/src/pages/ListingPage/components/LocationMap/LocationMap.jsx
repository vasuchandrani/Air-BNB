import { SearchIcon, ZoomInIcon, ZoomOutIcon } from '../../../../assets/icons';
import './LocationMap.css';

const LocationMap = ({ listing }) => (
  <div className="location-map">
    <h2 className="location-map__title">Where you'll be</h2>
    <p className="location-map__address">{listing.location.address}</p>
    <div className="location-map__container">
      <img src="/images/map.png" alt="Map showing location" className="location-map__image" />
      <button className="location-map__search" type="button" aria-label="Search on map">
        <SearchIcon size={14} />
      </button>
      <div className="location-map__zoom">
        <button className="location-map__zoom-btn" type="button" aria-label="Zoom in"><ZoomInIcon size={18} /></button>
        <button className="location-map__zoom-btn" type="button" aria-label="Zoom out"><ZoomOutIcon size={18} /></button>
      </div>
    </div>
    <p className="location-map__note">Exact location will be provided after booking.</p>
  </div>
);

export default LocationMap;
