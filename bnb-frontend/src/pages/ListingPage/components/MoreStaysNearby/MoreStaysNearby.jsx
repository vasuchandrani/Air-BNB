import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/icons';
import './MoreStaysNearby.css';

const ITEMS_PER_PAGE = 5;

const MoreStaysNearby = ({ nearbyStays }) => {
  const [page, setPage] = useState(1);
  if (!nearbyStays || !nearbyStays.stays) return null;

  const totalPages = Math.ceil(nearbyStays.stays.length / ITEMS_PER_PAGE) || 1;
  const page1Stays = nearbyStays.stays.slice(0, 5);
  const page2Stays = nearbyStays.stays.slice(5, 10);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="more-stays">
      <div className="more-stays__header">
        <h2 className="more-stays__title">More stays nearby</h2>
        <div className="more-stays__nav">
          <span className="more-stays__page">{page} / {totalPages}</span>
          <button
            className="more-stays__arrow"
            onClick={handlePrev}
            disabled={page === 1}
            type="button"
            aria-label="Previous stays"
          >
            <ChevronLeftIcon size={12} />
          </button>
          <button
            className="more-stays__arrow"
            onClick={handleNext}
            disabled={page === totalPages}
            type="button"
            aria-label="Next stays"
          >
            <ChevronRightIcon size={12} />
          </button>
        </div>
      </div>

      <div className="more-stays__carousel-viewport">
        <div
          className="more-stays__carousel-track"
          style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
        >
          {/* Page 1 */}
          <div className="more-stays__page-group">
            {page1Stays.map((stay) => (
              <a href="#" key={stay.id} className="more-stays__card" onClick={(e) => e.preventDefault()}>
                <div className="more-stays__image-container">
                  <img src={stay.image} alt={stay.title} className="more-stays__image" />
                </div>
                <div className="more-stays__info">
                  <h3 className="more-stays__card-title">{stay.title}</h3>
                  <p className="more-stays__price-row">
                    <span className="more-stays__price">
                      {stay.price.currency}{stay.price.amount.toLocaleString('en-IN')}
                    </span>
                    <span className="more-stays__rating">
                      ★ {stay.rating}
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Page 2 */}
          {page2Stays.length > 0 && (
            <div className="more-stays__page-group">
              {page2Stays.map((stay) => (
                <a href="#" key={stay.id} className="more-stays__card" onClick={(e) => e.preventDefault()}>
                  <div className="more-stays__image-container">
                    <img src={stay.image} alt={stay.title} className="more-stays__image" />
                  </div>
                  <div className="more-stays__info">
                    <h3 className="more-stays__card-title">{stay.title}</h3>
                    <p className="more-stays__price-row">
                      <span className="more-stays__price">
                        {stay.price.currency}{stay.price.amount.toLocaleString('en-IN')}
                      </span>
                      <span className="more-stays__rating">
                        ★ {stay.rating}
                      </span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreStaysNearby;
