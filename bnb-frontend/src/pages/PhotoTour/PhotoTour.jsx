import { useEffect } from 'react';
import { ChevronLeftIcon, ShareIcon, HeartIcon } from '../../assets/icons';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import ThumbnailGrid from './components/ThumbnailGrid/ThumbnailGrid';
import PhotoSection from './components/PhotoSection/PhotoSection';
import './PhotoTour.css';

const PhotoTour = ({ photos, isSaved, onToggleSave, onClose, onPhotoClick }) => {
  const trapRef = useFocusTrap(true);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleScrollToCategory = (categoryId) => {
    const el = document.getElementById(`category-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="photo-tour" ref={trapRef} role="dialog" aria-label="Photo tour">
      <div className="photo-tour__header">
        <div className="photo-tour__header-inner">
          <button className="photo-tour__back-btn" onClick={onClose} type="button" aria-label="Back to listing">
            <ChevronLeftIcon size={16} />
          </button>
          <span className="photo-tour__title">Photo tour</span>
          <div className="photo-tour__actions">
            <button className="photo-tour__action-btn" type="button" aria-label="Share">
              <ShareIcon size={16} />
            </button>
            <button
              className="photo-tour__action-btn"
              type="button"
              onClick={onToggleSave}
              aria-label={isSaved ? "Remove from saved" : "Save this listing"}
            >
              <HeartIcon size={16} filled={isSaved} />
            </button>
          </div>
        </div>
      </div>

      <div className="photo-tour__content">
        {/* Thumbnail Navigation */}
        <ThumbnailGrid categories={photos.categories} onThumbnailClick={handleScrollToCategory} />

        {/* Photo Sections */}
        <div className="photo-tour__sections">
          {photos.categories.map((category) => (
            <PhotoSection
              key={category.id}
              category={category}
              onPhotoClick={onPhotoClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoTour;
