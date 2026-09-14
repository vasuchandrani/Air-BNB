import { useState, useEffect } from 'react';
import { useModalUrl } from './hooks/useModalUrl';
import { getListingById, getListingPhotos, getReviews, getHostInfo, getListingAmenities, getNearbyStays } from './services/api';
import Header from './components/layout/Header/Header';
import StickyNav from './components/layout/StickyNav/StickyNav';
import ListingPage from './pages/ListingPage/ListingPage';
import PhotoTour from './pages/PhotoTour/PhotoTour';
import Lightbox from './pages/Lightbox/Lightbox';
import AmenitiesModal from './components/modals/AmenitiesModal/AmenitiesModal';
import './App.css';

function App() {
  const {
    isPhotoTourOpen,
    isLightboxOpen,
    isAmenitiesOpen,
    modalItem,
    openPhotoTour,
    openLightbox,
    openAmenities,
    closeLightbox,
    closeAll,
  } = useModalUrl();

  const [listing, setListing] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [host, setHost] = useState(null);
  const [amenities, setAmenities] = useState(null);
  const [nearbyStays, setNearbyStays] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [listingRes, photosRes, reviewsRes, hostRes, amenitiesRes, nearbyRes] =
          await Promise.all([
            getListingById(1),
            getListingPhotos(1),
            getReviews(1),
            getHostInfo(1),
            getListingAmenities(1),
            getNearbyStays(1),
          ]);

        setListing(listingRes);
        setPhotos(photosRes);
        setReviews(reviewsRes);
        setHost(hostRes);
        setAmenities(amenitiesRes);
        setNearbyStays(nearbyRes);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Lock body scroll when modals are open
  useEffect(() => {
    if (isPhotoTourOpen || isLightboxOpen || isAmenitiesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPhotoTourOpen, isLightboxOpen, isAmenitiesOpen]);

  if (loading || !listing) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <StickyNav listing={listing} />

      <main>
        <ListingPage
          listing={listing}
          photos={photos}
          reviews={reviews}
          host={host}
          amenities={amenities}
          nearbyStays={nearbyStays}
          isSaved={isSaved}
          onToggleSave={() => setIsSaved((prev) => !prev)}
          onShowAllPhotos={openPhotoTour}
          onPhotoClick={openPhotoTour}
          onShowAllAmenities={openAmenities}
        />
      </main>

      {/* Photo Tour Modal */}
      {isPhotoTourOpen && (
        <PhotoTour
          photos={photos}
          isSaved={isSaved}
          onToggleSave={() => setIsSaved((prev) => !prev)}
          onClose={closeAll}
          onPhotoClick={openLightbox}
        />
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && photos && (
        <Lightbox
          photos={photos.allPhotos}
          currentPhotoId={modalItem}
          onClose={closeAll}
          onBackToTour={closeLightbox}
          onNavigate={openLightbox}
        />
      )}

      {/* Amenities Modal */}
      {isAmenitiesOpen && amenities && (
        <AmenitiesModal
          amenities={amenities}
          onClose={closeAll}
        />
      )}
    </div>
  );
}

export default App;
