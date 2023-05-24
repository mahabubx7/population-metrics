import { render, screen } from "@testing-library/react";
import Icon from "../Icon";

describe("Atoms/Icon Tests", () => {
  it("should render the Icon component", () => {
    render(<Icon name="mic-line" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render Icon with given icon-name", () => {
    render(<Icon name="mic-line" />);
    expect(screen.getByTestId("icon").classList.contains("ri-mic-line")).toBe(
      true
    );
  });

  it("should render Icon with given classNames", () => {
    render(<Icon name="mic-line" classes="class1 class2" />);
    expect(screen.getByTestId("icon").classList.contains("class1")).toBe(true);
    expect(screen.getByTestId("icon").classList.contains("class2")).toBe(true);
  });
});
