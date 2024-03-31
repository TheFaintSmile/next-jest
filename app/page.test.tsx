/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./page";

it("renders a heading", () => {
  render(<Page />);

  const heading = screen.getByRole("heading", {
    name: /counter app/i,
  });

  expect(heading).toBeInTheDocument();
})

it("increments the counter", () => {
  render(<Page />);

  const incrementButton = screen.getByRole("button", {
    name: /\+/i,
  });
  
  fireEvent.click(incrementButton);

  const counter = screen.getByText("1");

  expect(counter).toBeInTheDocument();
})

it("decrements the counter", () => {
  render(<Page />);

  const decrementButton = screen.getByRole("button", {
    name: /-/i,
  });

  fireEvent.click(decrementButton);

  const counter = screen.getByText("-1");

  expect(counter).toBeInTheDocument();
})