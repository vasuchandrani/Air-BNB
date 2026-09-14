/**
 * SVG Icons — Airbnb Clone
 * All icons as React components matching Airbnb's line-based icon style
 */

// ── Navigation Icons ──────────────────────────────

export const SearchIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="13" cy="13" r="10" />
    <path d="M20.5 20.5L30 30" />
  </svg>
);

export const GlobeIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} fill="currentColor" {...props}>
    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.82zm1.2-1.5c.14-2.64 1.14-4.86 1.88-5h.1c.7.07 1.71 2.33 1.92 5zm4.26 0c-.1-2.02-.56-3.88-1.18-5.06A6.26 6.26 0 0 1 14.17 7.5h-2.72zm-7.46 0H1.8A6.26 6.26 0 0 1 5.76 2.44c-.64 1.2-1.1 3.08-1.2 5.06z" />
  </svg>
);

export const HamburgerIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" {...props}>
    <path d="M4 8h24M4 16h24M4 24h24" />
  </svg>
);

export const UserIcon = ({ size = 26, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...props}>
    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 1 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z" />
  </svg>
);

// ── Action Icons ──────────────────────────────────

export const ShareIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v19M8 11l8-8 8 8" />
  </svg>
);

export const HeartIcon = ({ size = 16, filled = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill={filled ? "#FF385C" : "none"}
    stroke={filled ? "#FF385C" : "currentColor"}
    strokeWidth="2"
    {...props}
  >
    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05A6.98 6.98 0 0 0 9 4a6.98 6.98 0 0 0-7 7c0 7 7 12.27 14 17z" />
  </svg>
);

export const GridIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} fill="currentColor" {...props}>
    <path d="M3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM3 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

export const CloseIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" {...props}>
    <path d="M6 6l20 20M26 6L6 26" />
  </svg>
);

export const BackArrowIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M20 28L8 16 20 4" />
  </svg>
);

export const ChevronLeftIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <path d="M20 28L8 16 20 4" />
  </svg>
);

export const ChevronRightIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 4l12 12-12 12" />
  </svg>
);

// ── Rating/Review Icons ───────────────────────────

export const StarIcon = ({ size = 14, filled = true, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M16 2l4.55 9.22L30 12.76l-7 6.82L24.64 30 16 25.27 7.36 30 9 19.58l-7-6.82 9.45-1.54z" />
  </svg>
);

export const CleanlinessIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 13h10l2 4v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17l2-4z" />
    <path d="M13 13V9h6v4" />
    <path d="M13 9H9" />
    <path d="M19 11l3 1.5-1.5 2.5" />
    <path d="M11 23c2.5-1.5 5.5-1.5 8 0" />
    <circle cx="26" cy="8" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="28" cy="11" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="26" cy="14" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const AccuracyIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="16" cy="16" r="13" />
    <path d="M11 16.5l3.5 3.5 7.5-7.5" />
  </svg>
);

export const CheckInIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13" cy="13" r="6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M17.5 17.5l7 7v3h-3l-1.5-1.5v-2l-2-2" />
  </svg>
);

export const CommunicationIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 6h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9l-5 4v-4H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  </svg>
);

export const LocationIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 8l7-3 8 3 7-3v18l-7 3-8-3-7 3V8z" />
    <path d="M12 5v18" />
    <path d="M20 8v18" />
  </svg>
);

export const ValueIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 16.5V7a1 1 0 0 1 1-1h9.5l11 11a2 2 0 0 1 0 2.83l-5.67 5.67a2 2 0 0 1-2.83 0L6 16.5z" />
    <circle cx="11.5" cy="11.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

// ── Highlight Icons ───────────────────────────────

export const OutdoorIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 19h18l-3 9H10l-3-9z" />
    <path d="M12 19c0-3 2-6 4-9 2 3 4 6 4 9" />
    <path d="M16 10v-5" />
  </svg>
);

export const CoolIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="16" cy="16" r="2.5" />
    <path d="M16 13.5C16 7.5 20.5 5 23 8s-1 5.5-7 5.5z" />
    <path d="M18.5 16c6 0 8.5 4.5 5.5 7s-5.5-1-5.5-7z" />
    <path d="M16 18.5c0 6-4.5 8.5-7 5.5s1-5.5 7-5.5z" />
    <path d="M13.5 16c-6 0-8.5-4.5-5.5-7s5.5 1 5.5 7z" />
  </svg>
);

export const SelfCheckInIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 4h18v24H7" />
    <path d="M7 4l12 3v20L7 28V4z" />
    <circle cx="16" cy="16" r="1" fill="currentColor" />
  </svg>
);

export const BalloonIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="16" cy="12" rx="9" ry="10" />
    <path d="M14 22l2 2 2-2z" />
    <path d="M16 24c0 3-2 4-2 6" />
  </svg>
);

export const GraduationCapIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l14-7 14 7-14 7-14-7z" />
    <path d="M6 14.5v7c0 3.5 4.5 6.5 10 6.5s10-3 10-6.5v-7" />
    <path d="M26 13v9" />
  </svg>
);

export const ShieldIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 3L5 7v9c0 8.5 4.7 13.3 11 15 6.3-1.7 11-6.5 11-15V7L16 3z" />
  </svg>
);

// ── Amenity Icons ─────────────────────────────────

export const KitchenIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M26 1v30H6V1M6 11h20M10 6v5M16 6v5M22 6v5M10 16v6M22 16v6" />
  </svg>
);

export const WifiIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M16 25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 9c3.7-3.46 8.64-5.58 14-5.58S26.3 5.54 30 9M7 14a12.72 12.72 0 0 1 9-3.73A12.72 12.72 0 0 1 25 14M11.5 19a7.42 7.42 0 0 1 4.5-1.5 7.42 7.42 0 0 1 4.5 1.5" />
  </svg>
);

export const WorkspaceIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M26 20H6M6 20v8M26 20v8M10 20v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M16 4v8" />
  </svg>
);

export const ParkingIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="4" y="4" width="24" height="24" rx="2" />
    <path d="M12 22V10h6a4 4 0 0 1 0 8h-6" />
  </svg>
);

export const PoolIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M2 22c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M2 28c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M10 4v14M22 4v14M10 12h12" />
  </svg>
);

export const HotTubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 18h20v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8zM10 2c0 2.21-.89 4-2 4s-2-1.79-2-4M18 2c0 2.21-.89 4-2 4s-2-1.79-2-4M26 2c0 2.21-.89 4-2 4s-2-1.79-2-4" />
  </svg>
);

export const PetsIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="11" cy="8" r="3" />
    <circle cx="21" cy="8" r="3" />
    <circle cx="6" cy="16" r="3" />
    <circle cx="26" cy="16" r="3" />
    <path d="M16 30c-4 0-7-3-7-7a7 7 0 0 1 14 0c0 4-3 7-7 7z" />
  </svg>
);

export const CameraIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M2 8a2 2 0 0 1 2-2h5l2-3h10l2 3h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
    <circle cx="16" cy="16" r="5" />
  </svg>
);

export const AlarmIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8v8l6 4" />
  </svg>
);

export const SmokeIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="18" width="28" height="10" rx="2" />
    <path d="M26 18v-4a4 4 0 0 0-4-4 4 4 0 0 1-4-4V2" />
  </svg>
);

// ── Map Icons ─────────────────────────────────────

export const MapPinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor" {...props}>
    <path d="M16 2a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18A10 10 0 0 0 16 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);

export const ZoomInIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M16 8v16M8 16h16" />
  </svg>
);

export const ZoomOutIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M8 16h16" />
  </svg>
);

// ── Things to Know Icons ──────────────────────────

export const CancellationIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="4" y="4" width="24" height="24" rx="2" />
    <path d="M4 12h24M12 4v4M20 4v4M12 18l8 0M12 22l5 0" />
  </svg>
);

export const HouseRulesIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8v8h6" />
  </svg>
);

export const SafetyIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M16 2L4 8v8c0 8.4 5.12 16.24 12 18 6.88-1.76 12-9.6 12-18V8L16 2z" />
  </svg>
);

// ── Misc Icons ────────────────────────────────────

export const KeyboardIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="8" width="28" height="16" rx="2" />
    <path d="M8 14h2M14 14h4M22 14h2M10 18h12" />
  </svg>
);

export const FlagIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 30V2l20 10-20 10" />
  </svg>
);

export const ShowAllPhotosIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size} fill="currentColor" {...props}>
    <path d="M3 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM13 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM3 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM13 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

export const VerifiedIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} {...props}>
    <circle cx="16" cy="16" r="14" fill="#E31C5F" />
    <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="3" fill="none" />
  </svg>
);

export const BedIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M4 26V18a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v8M4 18V8a2 2 0 0 1 2-2h6v8M18 6h8a2 2 0 0 1 2 2v10M2 26h28" />
  </svg>
);

// ── Laurel Icons (Guest Favourite) ────────────────

export const LaurelLeftIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 72" width={size} height={size * 2} {...props}>
    <path d="M18 0C18 0 0 18 0 36s18 36 18 36c0 0-12-14-12-36S18 0 18 0z" fill="currentColor" opacity="0.7" />
    <path d="M24 8C24 8 8 22 8 36s16 28 16 28c0 0-8-12-8-28S24 8 24 8z" fill="currentColor" opacity="0.5" />
    <path d="M30 16C30 16 16 26 16 36s14 20 14 20c0 0-6-8-6-20S30 16 30 16z" fill="currentColor" opacity="0.3" />
  </svg>
);

export const LaurelRightIcon = ({ size = 32, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 72" width={size} height={size * 2} style={{ transform: 'scaleX(-1)' }} {...props}>
    <path d="M18 0C18 0 0 18 0 36s18 36 18 36c0 0-12-14-12-36S18 0 18 0z" fill="currentColor" opacity="0.7" />
    <path d="M24 8C24 8 8 22 8 36s16 28 16 28c0 0-8-12-8-28S24 8 24 8z" fill="currentColor" opacity="0.5" />
    <path d="M30 16C30 16 16 26 16 36s14 20 14 20c0 0-6-8-6-20S30 16 30 16z" fill="currentColor" opacity="0.3" />
  </svg>
);

export const HomeIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M16 2L2 14h4v14h8V20h4v8h8V14h4L16 2z" />
  </svg>
);
