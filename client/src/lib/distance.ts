// Calculate distance between two coordinates using Haversine formula
// Returns distance in meters
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

// Check if user is within proximity of a POI
export function isWithinProximity(
  userLat: number,
  userLon: number,
  poiLat: number,
  poiLon: number,
  radiusMeters: number = 100
): boolean {
  const distance = calculateDistance(userLat, userLon, poiLat, poiLon);
  return distance <= radiusMeters;
}
