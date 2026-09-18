import { useEffect, useState } from "react";
import { searchPhotos } from "../services/photoApi";
import { searchDestination } from "../services/destinationApi";
import { getWeather } from "../services/weatherApi";

import type { Destination, Weather } from "../types";
import DestinationCard from "./DestinationCard";
import WeatherCard from "./WeatherCard";



function SearchBar() {
  const [city, setCity] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const savedDestination = localStorage.getItem(
      "roamlyLastDestination"
    );

    if (savedDestination) {
      const destinationData = JSON.parse(savedDestination);

      setDestination(destinationData);
      searchPhotos(destinationData.name).then((photoData) => {
        const photoUrl = photoData.results?.[0]?.urls?.regular;

        setPhotoUrl(photoUrl ?? null);
      });

      getWeather(
        destinationData.latitude,
        destinationData.longitude
      ).then((weatherData) => {
        setWeather({
          temperature: weatherData.current.temperature_2m,
          windSpeed: weatherData.current.wind_speed_10m,
          weatherCode: weatherData.current.weather_code,
        });
      });
    }
  }, []);

  const saveTrip = () => {
    if (!destination) return;

    const savedTrips = JSON.parse(
      localStorage.getItem("roamlyTrips") || "[]"
    );

    const alreadySaved = savedTrips.some(
      (trip: Destination) => trip.name === destination.name
    );

    if (alreadySaved) {
      setSaved(true);
      return;
    }

    savedTrips.push(destination);

    localStorage.setItem(
      "roamlyTrips",
      JSON.stringify(savedTrips)
    );

    setSaved(true);
  };
  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a destination.");
      return;
    }

    setError("");
    setLoading(true);
    setSaved(false);

    try {
      const data = await searchDestination(city);

      const result = data.results?.[0];

      if (result) {
        setDestination({
          name: result.name,
          country: result.country,
          latitude: result.latitude,
          longitude: result.longitude,
        });
        localStorage.setItem(
          "roamlyLastDestination",
          JSON.stringify({
            name: result.name,
            country: result.country,
            latitude: result.latitude,
            longitude: result.longitude,
          })
        );

        const photoData = await searchPhotos(result.name);

        const photoUrl = photoData.results?.[0]?.urls?.regular;

        setPhotoUrl(photoUrl ?? null);

        const weatherData = await getWeather(
          result.latitude,
          result.longitude
        );

        setWeather({
          temperature: weatherData.current.temperature_2m,
          windSpeed: weatherData.current.wind_speed_10m,
          weatherCode: weatherData.current.weather_code,
        });
      }

      if (!result) {
        setError("Destination not found. Try another city.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <label htmlFor="destination-search">
          Search destination
        </label>

        <input
          id="destination-search"
          type="text"
          placeholder="Where do you want to go?"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          aria-label="Search destination"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>
      {error && (
        <p className="search-error" role="alert">
          {error}
        </p>
      )}

      {destination && (
        <div className="search-results" aria-live="polite">
          <div className="result-card">
            <DestinationCard destination={destination} />
          </div>

          {photoUrl && (
            <div className="result-card">
              <img
                src={photoUrl}
                alt={`${destination.name} destination`}
                className="destination-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {weather && (
            <div className="result-card">
              <WeatherCard weather={weather} />
            </div>
          )}

          <button
            className="save-trip-button"
            onClick={saveTrip}
          >
            {saved ? "Saved ✓" : "Save to My Trips"}
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;