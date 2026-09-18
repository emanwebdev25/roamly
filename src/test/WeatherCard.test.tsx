import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

describe("WeatherCard", () => {
  it("displays the current weather information", () => {
    render(
      <WeatherCard
        weather={{
          temperature: 28,
          windSpeed: 7,
          weatherCode: 1,
        }}
      />
    );

    expect(screen.getByText("Current Weather")).toBeInTheDocument();
    expect(screen.getByText("Temperature: 28°C")).toBeInTheDocument();
    expect(screen.getByText("Wind Speed: 7 km/h")).toBeInTheDocument();
    expect(screen.getByText("Partly Cloudy ⛅")).toBeInTheDocument();
  });
});