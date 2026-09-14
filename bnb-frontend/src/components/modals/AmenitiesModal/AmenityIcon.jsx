import React from 'react';

export const AmenityIcon = ({ icon, size = 24, available = true }) => {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { display: 'block', flexShrink: 0 },
  };

  switch (icon) {
    case 'hairdryer':
      return (
        <svg {...iconProps}>
          <path d="M4 14h12a6 6 0 0 0 6-6V6H4v8z" />
          <path d="M12 14v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V14" />
          <path d="M22 8h6M22 6h4" />
        </svg>
      );
    case 'cleaning':
      return (
        <svg {...iconProps}>
          <path d="M12 4h8v6H12zM8 10h16v4H8zM6 14l2 14h16l2-14" />
          <path d="M16 18v6" />
        </svg>
      );
    case 'shampoo':
    case 'conditioner':
    case 'showergel':
    case 'soap':
      return (
        <svg {...iconProps}>
          <rect x="8" y="10" width="16" height="18" rx="4" />
          <path d="M14 6h4v4h-4zM16 6V3h4" />
          <path d="M12 16h8" />
        </svg>
      );
    case 'hotwater':
      return (
        <svg {...iconProps}>
          <path d="M6 24h20M10 28h12" />
          <path d="M8 18c0-3 2-4 2-7M16 18c0-3 2-4 2-7M24 18c0-3 2-4 2-7" />
        </svg>
      );
    case 'washer':
      return (
        <svg {...iconProps}>
          <rect x="5" y="3" width="22" height="26" rx="3" />
          <circle cx="16" cy="17" r="6" />
          <circle cx="10" cy="7" r="1.5" fill="currentColor" />
          <circle cx="15" cy="7" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'essentials':
      return (
        <svg {...iconProps}>
          <rect x="4" y="6" width="24" height="20" rx="3" />
          <path d="M4 12h24M12 12v14M20 12v14" />
        </svg>
      );
    case 'hangers':
      return (
        <svg {...iconProps}>
          <path d="M16 8a3 3 0 1 0-3-3" />
          <path d="M16 11L4 20h24L16 11z" />
          <path d="M4 20v2a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-2" />
        </svg>
      );
    case 'linen':
    case 'pillows':
      return (
        <svg {...iconProps}>
          <rect x="4" y="8" width="24" height="16" rx="4" />
          <path d="M4 12c4 2 8 2 12 0s8-2 12 0" />
        </svg>
      );
    case 'iron':
      return (
        <svg {...iconProps}>
          <path d="M4 22h24a0 0 0 0 0 0 0c0-6-4-10-10-10H6a2 2 0 0 0-2 2v8z" />
          <path d="M6 12V8a2 2 0 0 1 2-2h12" />
        </svg>
      );
    case 'smarttv':
    case 'tv':
      return (
        <svg {...iconProps}>
          <rect x="3" y="6" width="26" height="18" rx="2" />
          <path d="M12 28h8M16 24v4" />
        </svg>
      );
    case 'sound':
      return (
        <svg {...iconProps}>
          <rect x="8" y="4" width="16" height="24" rx="3" />
          <circle cx="16" cy="11" r="2" />
          <circle cx="16" cy="20" r="4" />
        </svg>
      );
    case 'books':
      return (
        <svg {...iconProps}>
          <path d="M4 6v18c4-2 8-2 12 0 4-2 8-2 12 0V6c-4-2-8-2-12 0-4-2-8-2-12 0z" />
          <path d="M16 6v18" />
        </svg>
      );
    case 'ac':
      return (
        <svg {...iconProps}>
          <rect x="3" y="6" width="26" height="14" rx="2" />
          <path d="M7 14h18M10 24l2-2M16 25v-3M22 24l-2-2" />
        </svg>
      );
    case 'fan':
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="2.5" />
          <path d="M16 13.5C16 7.5 20.5 5 23 8s-1 5.5-7 5.5zM18.5 16c6 0 8.5 4.5 5.5 7s-5.5-1-5.5-7zM16 18.5c0 6-4.5 8.5-7 5.5s1-5.5 7-5.5zM13.5 16c-6 0-8.5-4.5-5.5-7s5.5 1 5.5 7z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...iconProps}>
          <path d="M2 8a2 2 0 0 1 2-2h5l2-3h10l2 3h5a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
          <circle cx="16" cy="16" r="5" />
        </svg>
      );
    case 'smoke':
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="5" />
          {!available && <path d="M4 4l24 24" stroke="#717171" strokeWidth="2.5" />}
        </svg>
      );
    case 'alarm':
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="12" />
          <path d="M16 10v6l4 3" />
          {!available && <path d="M4 4l24 24" stroke="#717171" strokeWidth="2.5" />}
        </svg>
      );
    case 'firstaid':
      return (
        <svg {...iconProps}>
          <rect x="4" y="6" width="24" height="20" rx="3" />
          <path d="M16 11v10M11 16h10" />
        </svg>
      );
    case 'fireext':
      return (
        <svg {...iconProps}>
          <rect x="10" y="12" width="12" height="16" rx="4" />
          <path d="M16 12V8m-4 0h8M16 4v4m0 0l6 3" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...iconProps}>
          <rect x="7" y="13" width="18" height="15" rx="3" />
          <path d="M11 13V8a5 5 0 0 1 10 0v5" />
          <circle cx="16" cy="20" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'wifi':
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="26" r="1" fill="currentColor" />
          <path d="M2 9c3.7-3.5 8.6-5.6 14-5.6s10.3 2.1 14 5.6M7 14a12.7 12.7 0 0 1 18 0M11.5 19a7.4 7.4 0 0 1 9 0" />
        </svg>
      );
    case 'workspace':
      return (
        <svg {...iconProps}>
          <path d="M26 20H6v8h20v-8zM10 20v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M16 4v8" />
        </svg>
      );
    case 'kitchen':
      return (
        <svg {...iconProps}>
          <path d="M26 2v28H6V2M6 11h20M10 6v5M16 6v5M22 6v5M10 16v6M22 16v6" />
        </svg>
      );
    case 'fridge':
      return (
        <svg {...iconProps}>
          <rect x="6" y="2" width="20" height="28" rx="3" />
          <path d="M6 14h20M10 7v3M10 19v5" />
        </svg>
      );
    case 'microwave':
      return (
        <svg {...iconProps}>
          <rect x="3" y="6" width="26" height="20" rx="3" />
          <rect x="6" y="9" width="14" height="14" rx="1" />
          <circle cx="24" cy="12" r="1" fill="currentColor" />
          <circle cx="24" cy="16" r="1" fill="currentColor" />
          <circle cx="24" cy="20" r="1" fill="currentColor" />
        </svg>
      );
    case 'cooking':
    case 'dishes':
      return (
        <svg {...iconProps}>
          <path d="M4 14h18a3 3 0 0 1 3 3v2H4v-5zM22 17h6" />
          <circle cx="13" cy="26" r="2" />
        </svg>
      );
    case 'stove':
    case 'oven':
      return (
        <svg {...iconProps}>
          <rect x="5" y="4" width="22" height="24" rx="2" />
          <circle cx="11" cy="9" r="2" />
          <circle cx="21" cy="9" r="2" />
          <path d="M5 14h22" />
          <rect x="8" y="17" width="16" height="8" rx="1" />
        </svg>
      );
    case 'coffee':
      return (
        <svg {...iconProps}>
          <path d="M5 10h18v10a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6V10zM23 13h3a3 3 0 0 1 0 6h-3M3 28h24" />
        </svg>
      );
    case 'wine':
      return (
        <svg {...iconProps}>
          <path d="M10 4h12v7a6 6 0 0 1-12 0V4zM16 17v9M10 26h12" />
        </svg>
      );
    case 'toaster':
      return (
        <svg {...iconProps}>
          <rect x="5" y="10" width="22" height="16" rx="4" />
          <path d="M9 10V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4M17 10V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
          <circle cx="23" cy="18" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'pool':
      return (
        <svg {...iconProps}>
          <path d="M2 22c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M2 28c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0M10 4v14M22 4v14M10 12h12" />
        </svg>
      );
    case 'hottub':
      return (
        <svg {...iconProps}>
          <path d="M6 18h20v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8zM10 2c0 2.2-.9 4-2 4s-2-1.8-2-4M18 2c0 2.2-.9 4-2 4s-2-1.8-2-4M26 2c0 2.2-.9 4-2 4s-2-1.8-2-4" />
        </svg>
      );
    case 'balcony':
    case 'garden':
    case 'outdoor':
    case 'furniture':
    case 'loungers':
      return (
        <svg {...iconProps}>
          <path d="M7 19h18l-3 9H10l-3-9zM12 19c0-3 2-6 4-9 2 3 4 6 4 9M16 10v-5" />
        </svg>
      );
    case 'bbq':
      return (
        <svg {...iconProps}>
          <path d="M6 14h20a10 10 0 0 1-20 0zM10 14l-3 14M22 14l3 14M16 4v6M12 7h8" />
        </svg>
      );
    case 'parking':
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="24" height="24" rx="3" />
          <path d="M12 22V10h6a4 4 0 0 1 0 8h-6" />
        </svg>
      );
    case 'entrance':
    case 'selfcheckin':
      return (
        <svg {...iconProps}>
          <path d="M7 4h18v24H7M7 4l12 3v20L7 28V4z" />
          <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case 'gym':
      return (
        <svg {...iconProps}>
          <path d="M4 14v4M28 14v4M7 11v10M25 11v10M7 16h18" />
        </svg>
      );
    case 'luggage':
      return (
        <svg {...iconProps}>
          <rect x="6" y="10" width="20" height="18" rx="2" />
          <path d="M12 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M10 28v2M22 28v2" />
        </svg>
      );
    case 'longterm':
      return (
        <svg {...iconProps}>
          <rect x="4" y="6" width="24" height="22" rx="3" />
          <path d="M4 12h24M10 3v4M22 3v4" />
        </svg>
      );
    case 'pets':
      return (
        <svg {...iconProps}>
          <circle cx="11" cy="8" r="3" />
          <circle cx="21" cy="8" r="3" />
          <circle cx="6" cy="16" r="3" />
          <circle cx="26" cy="16" r="3" />
          <path d="M16 30c-4 0-7-3-7-7a7 7 0 0 1 14 0c0 4-3 7-7 7z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="12" />
          <path d="M12 16h8M16 12v8" />
        </svg>
      );
  }
};

export default AmenityIcon;
