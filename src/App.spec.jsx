import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

describe("App", () => {
  it("should render homepage & headline", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headline = screen.getByText(/population metrics/i);
    expect(headline).toBeInTheDocument();
  });
});
