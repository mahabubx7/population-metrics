import store from "../store";

describe("Unit Tests for redux/country", () => {
  it("should initialize store for country", () => {
    const countryStore = store.getState().country;
    expect(countryStore.data).toEqual([]);
    expect(countryStore.error).toEqual(null);
    expect(countryStore.isLoading).toEqual(false);
    expect(countryStore.isLoaded).toEqual(false);
  });
});
