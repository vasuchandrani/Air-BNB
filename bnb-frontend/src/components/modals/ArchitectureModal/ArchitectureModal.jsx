import { useEffect } from 'react';
import { CloseIcon } from '../../../assets/icons';
import { useFocusTrap } from '../../../hooks/useFocusTrap';
import './ArchitectureModal.css';

const ARCHITECTURE_CONTENT = {
  title: 'System Architecture',
  sections: [
    {
      heading: 'Architecture Overview',
      diagram: `┌─────────────────────────────────────────────────────────────────────────┐
│                              CLIENTS                                    │
│                                                                         │
│      Web App (React/Vite)       ·       Mobile Apps (iOS / Android)     │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │  HTTPS
                                   ▼
                         ┌──────────────────┐
                         │    CDN + WAF     │
                         │                  │
                         │  Static assets   │
                         │  Image caching   │
                         │  DDoS protection │
                         └────────┬─────────┘
                                  │
                         ┌────────▼─────────┐
                         │   API Gateway    │
                         │                  │
                         │  Authentication  │
                         │  Rate limiting   │
                         │  Request routing │
                         └────────┬─────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
          ▼                       ▼                       ▼
   ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
   │   Listing   │        │   Booking   │        │    User     │
   │   Service   │        │   Service   │        │   Service   │
   │             │        │             │        │             │
   │ Property    │        │ Reservation │        │ Auth (JWT)  │
   │ management  │        │ Calendar    │        │ Profiles    │
   │ Search      │        │ Payments    │        │ Reviews     │
   │ Photos      │        │ Messaging   │        │ Notification│
   └──────┬──────┘        └──────┬──────┘        └──────┬──────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
        ┌─────▼──────┐   ┌──────▼──────┐    ┌──────▼───────┐
        │ PostgreSQL │   │    Redis    │    │ Elasticsearch│
        │            │   │             │    │              │
        │ Users      │   │ Sessions    │    │ Geo-spatial  │
        │ Listings   │   │ Cache       │    │ Full-text    │
        │ Bookings   │   │ Locks       │    │ Filters      │
        │ Payments   │   │             │    │ Ranking      │
        └────────────┘   └─────────────┘    └──────────────┘
                                 │
                       ┌─────────▼─────────┐
                       │  Cloudflare R2    │
                       │                   │
                       │  Property photos  │
                       │  (served via      │
                       │   Cloudflare CDN) │
                       └───────────────────┘`
    },
    {
      heading: 'Frontend',
      diagram: `┌──────────────────────────────────────────────────────────────┐
│                      REACT / VITE                            │
│                                                              │
│  Pages:   Listing Page → Photo Tour → Lightbox               │
│                                                              │
│  Components:  Header · Gallery · BookingCard · DatePicker    │
│               Reviews · Amenities · HostCard · Map · Footer  │
│                                                              │
│  Routing:  React Router                                      │
│  Styling:  Vanilla CSS                                       │
│  Data:     Static JSON (Mock Data)                           │
│                                                              │
│  Deployed on Vercel                                          │
└──────────────────────────────────────────────────────────────┘`
    },
    {
      heading: 'Scaling Strategy',
      diagram: `┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  FRONTEND                                                        │
│  ├── Deployed on Vercel for free hosting                         │
│  ├── Static assets served via Cloudflare CDN (edge caching)      │
│  └── Image optimization (WebP, responsive srcset)                │
│                                                                  │
│  BACKEND                                                         │
│  ├── VPS-based deployment (DigitalOcean / AWS EC2 / Hetzner)     │
│  ├── Multiple server instances behind a load balancer            │
│  ├── During peak traffic (festivals, holidays, long weekends)    │
│  │   spin up additional server instances to handle the surge     │
│  ├── Scale down during off-peak to reduce costs                  │
│  ├── Concurrent booking management:                              │
│  │   ├── Redis distributed locks to prevent double bookings      │
│  │   ├── Optimistic locking on calendar availability checks      │
│  │   └── Queue-based processing for high-demand listings         │
│  └── Stateless services — any server can handle any request      │
│                                                                  │
│  STORAGE                                                         │
│  ├── PostgreSQL: Primary + Read Replicas for read-heavy traffic  │
│  ├── Redis: in-memory cache, session store, booking locks        │
│  ├── Elasticsearch: dedicated search cluster                     │
│  └── Cloudflare R2: property photos (zero egress cost,           │
│       served directly via Cloudflare CDN globally)               │
│                                                                  │
│  DEPLOYMENT                                                      │
│  ├── CI/CD via GitHub Actions                                    │
│  ├── Multi-region: primary server + replicas in other regions    │
│  └── Auto-rollback on elevated error rates                       │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘`
    },
    {
      heading: 'Deployment',
      diagram: `              ┌───────────────────┐
              │    Global DNS     │
              │    (Geo-routing)  │
              └─────────┬─────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
  ┌──────▼──────┐ ┌─────▼──────┐ ┌────▼───────┐
  │  US-EAST    │ │  EU-WEST   │ │  AP-SOUTH  │
  │  Primary    │ │  Read      │ │  Read      │
  │  Read+Write │ │  Replica   │ │  Replica   │
  └─────────────┘ └────────────┘ └────────────┘`
    }
  ]
};

const ArchitectureModal = ({ onClose }) => {
  const trapRef = useFocusTrap(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="arch-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="arch-modal"
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label="System Architecture"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="arch-modal__header">
          <button
            className="arch-modal__close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="arch-modal__content">
          <h2 className="arch-modal__title">{ARCHITECTURE_CONTENT.title}</h2>

          {ARCHITECTURE_CONTENT.sections.map((section, index) => (
            <div key={index} className="arch-modal__section">
              <h3 className="arch-modal__section-heading">{section.heading}</h3>
              <pre className="arch-modal__diagram">{section.diagram}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;
