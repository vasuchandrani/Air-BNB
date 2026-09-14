import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Manages URL query params for modal states (Photo Tour, Lightbox).
 *
 * URL patterns:
 * - Listing page:  /
 * - Photo Tour:    /?modal=PHOTO_TOUR_SCROLLABLE
 * - Lightbox:      /?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1000
 */
export const useModalUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const modal = searchParams.get('modal');
  const modalItem = searchParams.get('modalItem');

  const isPhotoTourOpen = modal === 'PHOTO_TOUR_SCROLLABLE' && !modalItem;
  const isLightboxOpen = modal === 'PHOTO_TOUR_SCROLLABLE' && modalItem !== null;
  const isAmenitiesOpen = modal === 'AMENITIES_MODAL';

  const openPhotoTour = useCallback(() => {
    setSearchParams({ modal: 'PHOTO_TOUR_SCROLLABLE' });
  }, [setSearchParams]);

  const openLightbox = useCallback(
    (photoId) => {
      setSearchParams({
        modal: 'PHOTO_TOUR_SCROLLABLE',
        modalItem: String(photoId),
      });
    },
    [setSearchParams]
  );

  const openAmenities = useCallback(() => {
    setSearchParams({ modal: 'AMENITIES_MODAL' });
  }, [setSearchParams]);

  const closeLightbox = useCallback(() => {
    setSearchParams({ modal: 'PHOTO_TOUR_SCROLLABLE' });
  }, [setSearchParams]);

  const closeAll = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return {
    isPhotoTourOpen,
    isLightboxOpen,
    isAmenitiesOpen,
    modalItem: modalItem ? Number(modalItem) : null,
    openPhotoTour,
    openLightbox,
    openAmenities,
    closeLightbox,
    closeAll,
  };
};
