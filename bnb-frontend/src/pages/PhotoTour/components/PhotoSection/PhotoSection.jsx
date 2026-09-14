import './PhotoSection.css';

const PhotoSection = ({ category, onPhotoClick }) => (
  <div className="photo-section" id={`category-${category.id}`}>
    <div className="photo-section__info">
      <h3 className="photo-section__title">{category.name}</h3>
      {category.amenities && category.amenities.length > 0 && (
        <p className="photo-section__amenities">
          {category.amenities.join(' · ')}
        </p>
      )}
    </div>
    <div className="photo-section__photos">
      {category.photos.map((photo) => (
        <button
          key={photo.id}
          className="photo-section__photo-btn"
          onClick={() => onPhotoClick(photo.id)}
          type="button"
        >
          <img src={photo.src} alt={photo.alt} className="photo-section__image" />
        </button>
      ))}
    </div>
  </div>
);

export default PhotoSection;
