import { render, screen } from "@testing-library/react";
import ListItem from "../ListItem";

describe("Molecules/ListItem Tests", () => {
  it("should render the ListItem component", () => {
    render(<ListItem label="Click Me" />);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it("should render the ListItem with given icon", () => {
    render(<ListItem icon="mic-line" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render the ListItem with given element", () => {
    render(<ListItem icon="mic-line" element={<p>element-in-li</p>} />);
    expect(screen.getByText(/element-in-li/i)).toBeInTheDocument();
  });
});
