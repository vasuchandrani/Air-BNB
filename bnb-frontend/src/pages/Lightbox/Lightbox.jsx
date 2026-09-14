import { useMemo } from 'react';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import LightboxHeader from './components/LightboxHeader/LightboxHeader';
import NavigationArrow from './components/NavigationArrow/NavigationArrow';
import './Lightbox.css';

const Lightbox = ({ photos, currentPhotoId, onClose, onBackToTour, onNavigate }) => {
  const trapRef = useFocusTrap(true);

  const currentIndex = useMemo(() => {
    return photos.findIndex((p) => p.id === currentPhotoId);
  }, [photos, currentPhotoId]);

  const currentPhoto = photos[currentIndex] || photos[0];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const handlePrev = () => {
    if (hasPrev) onNavigate(photos[currentIndex - 1].id);
  };

  const handleNext = () => {
    if (hasNext) onNavigate(photos[currentIndex + 1].id);
  };

  useKeyboardNavigation({ onPrev: handlePrev, onNext: handleNext, onClose }, true);

  return (
    <div className="lightbox" ref={trapRef} role="dialog" aria-label="Photo viewer">
      <LightboxHeader
        currentIndex={currentIndex}
        totalPhotos={photos.length}
        categoryName={currentPhoto?.category || ''}
        onClose={onClose}
        onBackToTour={onBackToTour}
      />

      <div className="lightbox__body">
        {hasPrev && <NavigationArrow direction="prev" onClick={handlePrev} />}

        <div className="lightbox__image-container">
          <img
            src={currentPhoto?.src}
            alt={currentPhoto?.alt}
            className="lightbox__image"
          />
        </div>

        {hasNext && <NavigationArrow direction="next" onClick={handleNext} />}
      </div>
    </div>
  );
};

export default Lightbox;
