import { ShowAllPhotosIcon } from '../../../../assets/icons';
import './PhotoGallery.css';

const PhotoGallery = ({ photos, onShowAllPhotos }) => {
  if (!photos) return null;

  const heroPhotos = photos.heroPhotos;

  return (
    <div className="photo-gallery" onClick={onShowAllPhotos} role="button" tabIndex={0} aria-label="View all photos" onKeyDown={(e) => e.key === 'Enter' && onShowAllPhotos()}>
      <div className="photo-gallery__grid">
        {/* Main large image */}
        <div className="photo-gallery__main">
          <img src={heroPhotos[0]} alt="Main listing photo" className="photo-gallery__image" />
        </div>

        {/* 4 smaller images in 2x2 grid */}
        <div className="photo-gallery__side">
          {heroPhotos.slice(1, 5).map((photo, index) => (
            <div key={index} className="photo-gallery__side-item">
              <img src={photo} alt={`Listing photo ${index + 2}`} className="photo-gallery__image" />
            </div>
          ))}
        </div>
      </div>

      {/* Show all photos button */}
      <button
        className="photo-gallery__show-all"
        onClick={(e) => {
          e.stopPropagation();
          onShowAllPhotos();
        }}
        type="button"
      >
        <ShowAllPhotosIcon size={14} />
        <span>Show all photos</span>
      </button>
    </div>
  );
};

export default PhotoGallery;
