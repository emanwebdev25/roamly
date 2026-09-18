const accessKey = import.meta.env.VITE_PHOTO_KEY;

export const searchPhotos = async (query: string) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${accessKey}`
  );

  const data = await response.json();

  return data;
};