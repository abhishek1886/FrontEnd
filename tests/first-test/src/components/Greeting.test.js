import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldELement = screen.getByText("Hello World!");
    expect(helloWorldELement).toBeInTheDocument();
  });

  test("renders good to see you when button is NOT clicked", () => {
    render(<Greeting />);

    const textElement = screen.getByText("good to see you", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("renders Changed when button IS clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.getByText("Changed", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  test("should not render good to see you when button clicked", () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.queryByText("good to see you", { exact: false });
    expect(textElement).toBeNull();
  })
});
