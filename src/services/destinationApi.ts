const destinationCache = new Map();

export const searchDestination = async (city: string) => {
  const cacheKey = city.trim().toLowerCase();

  if (destinationCache.has(cacheKey)) {
    return destinationCache.get(cacheKey);
  }

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=1&language=en&format=json`
  );

  const data = await response.json();

  destinationCache.set(cacheKey, data);

  return data;
};