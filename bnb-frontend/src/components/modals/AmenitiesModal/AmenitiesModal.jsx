import { useEffect } from 'react';
import { CloseIcon } from '../../../assets/icons';
import { useFocusTrap } from '../../../hooks/useFocusTrap';
import AmenityIcon from './AmenityIcon';
import './AmenitiesModal.css';

const AmenitiesModal = ({ amenities, onClose }) => {
  const trapRef = useFocusTrap(true);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!amenities || !amenities.categories) return null;

  return (
    <div className="amenities-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="amenities-modal"
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="amenities-modal__header">
          <button
            className="amenities-modal__close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="amenities-modal__content">
          <h2 className="amenities-modal__title">What this place offers</h2>

          <div className="amenities-modal__categories">
            {amenities.categories.map((category, catIndex) => (
              <div key={catIndex} className="amenities-modal__category">
                <h3 className="amenities-modal__category-name">{category.name}</h3>

                <div className="amenities-modal__items">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`amenities-modal__item ${!item.available ? 'amenities-modal__item--unavailable' : ''}`}
                    >
                      <div className="amenities-modal__item-icon">
                        <AmenityIcon icon={item.icon} size={24} available={item.available} />
                      </div>
                      <div className="amenities-modal__item-info">
                        <span className={`amenities-modal__item-name ${!item.available ? 'amenities-modal__item-name--crossed' : ''}`}>
                          {item.name}
                        </span>
                        {item.details && (
                          <p className="amenities-modal__item-details">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
