import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

describe("Molecules/Button Tests", () => {
  it("should render the Button component", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it("should render the Button with given icon", () => {
    render(<Button label="Click Me" icon="mic-line" />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render the Button with given click events", async () => {
    let sum = 0;
    const demoFn = (n) => {
      sum += n;
    };
    render(<Button label="Click Me" onClick={() => demoFn(1)} />);
    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);
    expect(sum).toBe(1);
  });
});
