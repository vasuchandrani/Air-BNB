import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ListingTitle from './components/ListingTitle/ListingTitle';
import PropertyInfo from './components/PropertyInfo/PropertyInfo';
import GuestFavourite from './components/GuestFavourite/GuestFavourite';
import HostSection from './components/HostSection/HostSection';
import Highlights from './components/Highlights/Highlights';
import TranslationNotice from './components/TranslationNotice/TranslationNotice';
import Description from './components/Description/Description';
import SleepingArrangements from './components/SleepingArrangements/SleepingArrangements';
import Amenities from './components/Amenities/Amenities';
import DatePicker from './components/DatePicker/DatePicker';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import BookingCard from './components/BookingCard/BookingCard';
import LocationMap from './components/LocationMap/LocationMap';
import NeighbourhoodHighlights from './components/NeighbourhoodHighlights/NeighbourhoodHighlights';
import MeetYourHost from './components/MeetYourHost/MeetYourHost';
import ThingsToKnow from './components/ThingsToKnow/ThingsToKnow';
import MoreStaysNearby from './components/MoreStaysNearby/MoreStaysNearby';
import Divider from '../../components/common/Divider/Divider';
import { FlagIcon } from '../../assets/icons';
import './ListingPage.css';

const ListingPage = ({
  listing,
  photos,
  reviews,
  host,
  amenities,
  nearbyStays,
  isSaved,
  onToggleSave,
  onShowAllPhotos,
  onPhotoClick,
  onShowAllAmenities,
}) => {
  return (
    <div className="listing-page">
      {/* Photo Gallery */}
      <section id="photos" className="container">
        <ListingTitle listing={listing} isSaved={isSaved} onToggleSave={onToggleSave} />
        <PhotoGallery photos={photos} onShowAllPhotos={onShowAllPhotos} onPhotoClick={onPhotoClick} />
      </section>

      {/* Two Column Layout */}
      <div className="container">
        <div className="two-column-layout">
          {/* Left Content */}
          <div className="two-column-layout__content">
            <PropertyInfo listing={listing} />
            <GuestFavourite listing={listing} />
            <HostSection host={host} listing={listing} />
            <Divider />
            <Highlights listing={listing} />
            <Divider />
            <TranslationNotice listing={listing} />
            <Description listing={listing} />
            <Divider />
            <SleepingArrangements listing={listing} />
            <Divider />
            <section id="amenities">
              <Amenities amenities={amenities} onShowAllAmenities={onShowAllAmenities} />
            </section>
            <Divider />
            <DatePicker listing={listing} />

            {/* Report Listing on left below calendar */}
            <div className="listing-report">
              <a href="#" className="listing-report__link" onClick={(e) => e.preventDefault()}>
                <FlagIcon size={14} />
                <span>Report this listing</span>
              </a>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="two-column-layout__sidebar">
            <BookingCard listing={listing} />
          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <Divider />
      <div className="container">
        <section id="reviews">
          <ReviewsSection reviews={reviews} />
        </section>
      </div>

      <Divider />
      <div className="container">
        <section id="location">
          <LocationMap listing={listing} />
        </section>
      </div>

      <Divider />
      <div className="container">
        <NeighbourhoodHighlights listing={listing} />
      </div>

      <Divider />
      <div className="container">
        <MeetYourHost host={host} />
      </div>

      <Divider />
      <div className="container">
        <ThingsToKnow listing={listing} />
      </div>

      <Divider />
      <div className="container">
        <MoreStaysNearby nearbyStays={nearbyStays} />
      </div>
    </div>
  );
};

export default ListingPage;
