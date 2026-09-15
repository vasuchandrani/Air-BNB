# Airbnb Clone — System Architecture

> High-level architecture for a production-scale vacation-rental marketplace, covering frontend, backend, storage, and deployment.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
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
                       └───────────────────┘
```

---

## Frontend

```
┌──────────────────────────────────────────────────────────────┐
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
└──────────────────────────────────────────────────────────────┘
```

---

## Scaling Strategy

```
┌──────────────────────────────────────────────────────────────────┐
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
└──────────────────────────────────────────────────────────────────┘
```

---

## Deployment

```
              ┌───────────────────┐
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
  └─────────────┘ └────────────┘ └────────────┘
```
