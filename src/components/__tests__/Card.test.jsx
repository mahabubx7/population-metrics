import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";

describe("Component/Card Tests", () => {
  it("should render the Card component", () => {
    render(
      <BrowserRouter>
        <Card
          info={{
            name: "demo name",
            population: 164000,
            slug: "bd",
          }}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("card-item")).toBeInTheDocument();
  });
});
