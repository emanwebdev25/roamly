import { useEffect, useState } from "react";
import type { Destination } from "../types";

function MyTrips() {
  const [trips, setTrips] = useState<Destination[]>([]);

  useEffect(() => {
    const savedTrips = JSON.parse(
      localStorage.getItem("roamlyTrips") || "[]"
    );

    setTrips(savedTrips);
  }, []);

  const removeTrip = (tripName: string) => {
    const updatedTrips = trips.filter(
      (trip) => trip.name !== tripName
    );

    setTrips(updatedTrips);

    localStorage.setItem(
      "roamlyTrips",
      JSON.stringify(updatedTrips)
    );
  };

  return (
    <main className="my-trips-page">
      <div className="my-trips-header">
        <h2>My Trips</h2>
        <p>Keep track of the places you want to explore.</p>
      </div>
      {trips.length === 0 ? (
        <p className="empty-trips">No saved trips yet.</p>
      ) : (
        <div className="trips-list">
          {trips.map((trip) => (
            <div
              className="trip-card"
              key={`${trip.name}-${trip.latitude}`}
            >
              <p className="trip-location">📍 {trip.country}</p>
              <h3>{trip.name}</h3>

              <button onClick={() => removeTrip(trip.name)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default MyTrips;