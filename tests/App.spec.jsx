import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import App from "../src/App";

describe("App", () => {
  it("renders headline", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headline = screen.getByText(/Vite \+ React/i);
    expect(headline).toBeInTheDocument();
  });
});
