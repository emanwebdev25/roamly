import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

vi.mock("../services/destinationApi", () => ({
  searchDestination: vi.fn().mockResolvedValue({
    results: [
      {
        name: "Lahore",
        country: "Pakistan",
        latitude: 31.558,
        longitude: 74.3507,
      },
    ],
  }),
}));

vi.mock("../services/weatherApi", () => ({
  getWeather: vi.fn().mockResolvedValue({
    current: {
      temperature_2m: 28,
      wind_speed_10m: 7,
      weather_code: 1,
    },
  }),
}));

vi.mock("../services/photoApi", () => ({
  searchPhotos: vi.fn().mockResolvedValue({
    results: [],
  }),
}));

describe("SearchBar", () => {
  it("allows the user to enter a destination", async () => {
    const user = userEvent.setup();

    render(<SearchBar />);

    const input = screen.getByRole("textbox", {
      name: "Search destination",
    });

    await user.type(input, "Lahore");

    expect(input).toHaveValue("Lahore");
  });

  it("searches for a destination when the user clicks Search", async () => {
    const user = userEvent.setup();

    render(<SearchBar />);

    const input = screen.getByRole("textbox", {
      name: "Search destination",
    });

    const button = screen.getByRole("button", {
      name: "Search destination",
    });

    await user.type(input, "Lahore");
    await user.click(button);

    expect(
      await screen.findByText("Lahore")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pakistan")
    ).toBeInTheDocument();
  });
  it("shows an error when the user searches without entering a destination", async () => {
  const user = userEvent.setup();

  render(<SearchBar />);

  const button = screen.getByRole("button", {
    name: "Search destination",
  });

  await user.click(button);

  expect(
    screen.getByRole("alert")
  ).toHaveTextContent("Please enter a destination.");
});
});