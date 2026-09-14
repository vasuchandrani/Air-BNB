import { useState } from 'react';
import { ChevronRightIcon } from '../../../../assets/icons';
import './Description.css';

const Description = ({ listing }) => {
  const [expanded, setExpanded] = useState(false);
  const text = listing.description;
  const truncated = text.length > 300 ? text.slice(0, 300) + '...' : text;

  return (
    <div className="description">
      <p className="description__text">{expanded ? text : truncated}</p>
      {text.length > 300 && (
        <button
          className="description__show-more"
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          <span>{expanded ? 'Show less' : 'Show more'}</span>
          <ChevronRightIcon
            size={12}
            className={`description__arrow ${expanded ? 'description__arrow--up' : ''}`}
          />
        </button>
      )}
    </div>
  );
};

export default Description;
