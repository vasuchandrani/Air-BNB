/* eslint-disable no-unused-vars */
/**
 * Centralized API Layer — Airbnb Clone
 *
 * All API calls go through this single file.
 * Currently returns mock data. When Spring Boot backend is ready,
 * swap mock imports to fetch() calls — ZERO component changes needed.
 *
 * Usage in components:
 *   import { getListingById, getReviews } from '../services/api';
 *   const listing = await getListingById(1);
 */

import listingData from '../data/mock/listing.json';
import photosData from '../data/mock/photos.json';
import hostData from '../data/mock/host.json';
import reviewsData from '../data/mock/reviews.json';
import amenitiesData from '../data/mock/amenities.json';
import nearbyStaysData from '../data/mock/nearbyStays.json';

// Base URL for API calls (used when backend is integrated)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// ============================================================
// LISTING APIs
// ============================================================

/**
 * Fetch listing details by ID
 * Future endpoint: GET /api/listings/:id
 */
export const getListingById = async (id) => {
  // TODO: return fetch(`${API_BASE_URL}/api/listings/${id}`).then(r => r.json());
  return listingData;
};

/**
 * Fetch all photos for a listing
 * Future endpoint: GET /api/listings/:id/photos
 */
export const getListingPhotos = async (listingId) => {
  // TODO: return fetch(`${API_BASE_URL}/api/listings/${listingId}/photos`).then(r => r.json());
  return photosData;
};

/**
 * Fetch amenities for a listing
 * Future endpoint: GET /api/listings/:id/amenities
 */
export const getListingAmenities = async (listingId) => {
  // TODO: return fetch(`${API_BASE_URL}/api/listings/${listingId}/amenities`).then(r => r.json());
  return amenitiesData;
};

// ============================================================
// REVIEW APIs
// ============================================================

/**
 * Fetch reviews for a listing
 * Future endpoint: GET /api/listings/:id/reviews
 */
export const getReviews = async (listingId) => {
  // TODO: return fetch(`${API_BASE_URL}/api/listings/${listingId}/reviews`).then(r => r.json());
  return reviewsData;
};

// ============================================================
// HOST APIs
// ============================================================

/**
 * Fetch host information
 * Future endpoint: GET /api/hosts/:id
 */
export const getHostInfo = async (hostId) => {
  // TODO: return fetch(`${API_BASE_URL}/api/hosts/${hostId}`).then(r => r.json());
  return hostData;
};

// ============================================================
// NEARBY STAYS APIs
// ============================================================

/**
 * Fetch nearby stays for a listing
 * Future endpoint: GET /api/listings/:id/nearby
 */
export const getNearbyStays = async (listingId) => {
  // TODO: return fetch(`${API_BASE_URL}/api/listings/${listingId}/nearby`).then(r => r.json());
  return nearbyStaysData;
};
