import { describe, it, expect, vi, beforeEach } from "vitest";
import { searchDestination } from "../services/destinationApi";

describe("searchDestination", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("uses cached data for repeated searches", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue({
        json: async () => ({
          results: [
            {
              name: "Lahore",
              country: "Pakistan",
              latitude: 31.558,
              longitude: 74.3507,
            },
          ],
        }),
      } as Response);

    await searchDestination("Lahore");
    await searchDestination("Lahore");

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});