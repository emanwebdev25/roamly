export interface Destination {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}
export interface Weather {
  temperature: number;
  windSpeed: number;
  weatherCode: number;
}