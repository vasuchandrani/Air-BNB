import './PropertyInfo.css';

const PropertyInfo = ({ listing }) => (
  <div className="property-info">
    <h2 className="property-info__type">{listing.type} in {listing.location.city}, {listing.location.country}</h2>
    <p className="property-info__details">
      {listing.guests} guests · {listing.bedrooms} {listing.bedrooms === 1 ? 'bedroom' : 'bedrooms'} · {listing.beds} {listing.beds === 1 ? 'bed' : 'beds'} · {listing.bathrooms} {listing.bathrooms === 1 ? 'bathroom' : 'bathrooms'}
    </p>
  </div>
);

export default PropertyInfo;
