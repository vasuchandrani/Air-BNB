import { useState } from 'react';
import { ShareIcon, HeartIcon } from '../../../../assets/icons';
import './ListingTitle.css';

const ListingTitle = ({ listing, isSaved: externalIsSaved, onToggleSave }) => {
  const [internalIsSaved, setInternalIsSaved] = useState(false);
  const isSaved = externalIsSaved !== undefined ? externalIsSaved : internalIsSaved;

  const handleToggle = (e) => {
    e.preventDefault();
    if (onToggleSave) {
      onToggleSave();
    } else {
      setInternalIsSaved((prev) => !prev);
    }
  };

  return (
    <div className="listing-title">
      <h1 className="listing-title__text">{listing.title}</h1>
      <div className="listing-title__actions">
        <button className="listing-title__action" type="button">
          <ShareIcon size={16} />
          <span>Share</span>
        </button>
        <button
          className={`listing-title__action ${isSaved ? 'listing-title__action--saved' : ''}`}
          type="button"
          onClick={handleToggle}
          aria-label={isSaved ? 'Remove from saved' : 'Save this listing'}
        >
          <HeartIcon size={16} filled={isSaved} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
};

export default ListingTitle;
