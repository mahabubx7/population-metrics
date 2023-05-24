import configureStore from "redux-mock-store";

describe("Unit Tests for redux", () => {
  it("should initialize store with given state", () => {
    const initialStore = {
      data: [],
      isLoading: false,
      isLoaded: false,
      error: null,
    };
    const mockStore = configureStore();
    const store = mockStore(initialStore);
    expect(store.getState()).toEqual(initialStore);
  });
});
