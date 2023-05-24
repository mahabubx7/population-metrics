import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe("Component/Header Tests", () => {
  it("should render the Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render the Header with back button", () => {
    render(
      <BrowserRouter>
        <Header isDetail />
      </BrowserRouter>
    );
    expect(screen.getByTestId("btn-back")).toBeInTheDocument();
  });

  it("should render the Header with given title", () => {
    render(
      <BrowserRouter>
        <Header title="Demo Title" />
      </BrowserRouter>
    );
    expect(screen.getByText(/demo title/i)).toBeInTheDocument();
  });
});
