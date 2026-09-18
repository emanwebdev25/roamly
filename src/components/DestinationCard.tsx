import type { Destination } from "../types";

interface DestinationCardProps {
  destination: Destination;
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="destination-card">
      <h3>{destination.name}</h3>
      <p>{destination.country}</p>
      <p>Latitude: {destination.latitude}</p>
      <p>Longitude: {destination.longitude}</p>
      
    </div>
  );
}

export default DestinationCard;