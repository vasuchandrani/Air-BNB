import { useState, useEffect } from 'react';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import { StarIcon } from '../../../assets/icons';
import './StickyNav.css';

const NAV_SECTIONS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

const StickyNav = ({ listing }) => {
  const [isVisible, setIsVisible] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS.map((s) => s.id), 80);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the photo gallery (~500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // sticky nav height + buffer
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!listing) return null;

  return (
    <nav className={`sticky-nav ${isVisible ? 'sticky-nav--visible' : ''}`} aria-label="Page sections">
      <div className="sticky-nav__container container">
        <div className="sticky-nav__tabs">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`sticky-nav__tab ${activeSection === section.id ? 'sticky-nav__tab--active' : ''}`}
              onClick={(e) => handleNavClick(e, section.id)}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="sticky-nav__booking">
          <div className="sticky-nav__price-info">
            <span className="sticky-nav__price">
              {listing.price.currency}{listing.price.amount.toLocaleString('en-IN')}
            </span>
            <span className="sticky-nav__price-label"> for {listing.price.nights} nights</span>
            <div className="sticky-nav__rating">
              <StarIcon size={12} filled />
              <span>{listing.rating}</span>
              <span className="sticky-nav__dot">·</span>
              <span className="sticky-nav__reviews">{listing.reviewCount} reviews</span>
            </div>
          </div>
          <button
            type="button"
            className="sticky-nav__reserve-btn"
            onClick={() => {
              const widget = document.getElementById('booking-widget') || document.querySelector('.booking-card');
              if (widget) {
                widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
