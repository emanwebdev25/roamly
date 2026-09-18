import type { Weather } from "../types";
interface WeatherCardProps {
  weather: Weather;
}

interface WeatherCardProps {
  weather: Weather;
}

const getWeatherCondition = (code: number) => {
  if (code === 0) return "Clear ☀️";
  if (code === 1 || code === 2) return "Partly Cloudy ⛅";
  if (code === 3) return "Cloudy ☁️";
  if (code >= 51 && code <= 67) return "Rainy 🌧️";
  if (code >= 71 && code <= 77) return "Snowy ❄️";
  if (code >= 80 && code <= 82) return "Rain Showers 🌦️";
  if (code >= 95) return "Thunderstorm ⛈️";

  return "Unknown";
};

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <h3>Current Weather</h3>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <p>{getWeatherCondition(weather.weatherCode)}</p>
    </div>
  );
}

export default WeatherCard;