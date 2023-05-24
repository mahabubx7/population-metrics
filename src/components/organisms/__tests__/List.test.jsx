import { render, screen } from "@testing-library/react";
import List from "../List";

describe("Molecules/List Tests", () => {
  it("should render the List component", () => {
    render(<List classes="btn-icons" list={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should render the List component with given label mark", () => {
    render(<List list={[]} label="list-items" />);
    expect(screen.getByText(/list-items/i)).toBeInTheDocument();
  });

  it("should render the List with given list", () => {
    render(
      <List
        classes="btn-icons"
        list={[{ icon: "mic-line" }, { icon: "settings-3-line" }]}
      />
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByTestId("icon").length).toEqual(2);
  });
});
