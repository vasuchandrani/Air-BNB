import { useEffect } from 'react';

/**
 * Adds keyboard event listeners for lightbox navigation.
 * @param {Object} handlers - Object with onPrev, onNext, onClose callbacks
 * @param {boolean} enabled - Whether keyboard navigation is active
 */
export const useKeyboardNavigation = ({ onPrev, onNext, onClose }, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          onPrev?.();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext?.();
          break;
        case 'Escape':
          e.preventDefault();
          onClose?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrev, onNext, onClose, enabled]);
};
