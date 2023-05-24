import { render, screen } from "@testing-library/react";
import Loading from "../Loading";

describe("Component/Loading Tests", () => {
  it("should render the Loading component", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
