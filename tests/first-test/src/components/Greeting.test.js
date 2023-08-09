import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting Component', () => {
  test("should render Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... mothing

  // Assert
  const helloWorldELement = screen.getByText("Hello World!");
  expect(helloWorldELement).toBeInTheDocument();
});
})


