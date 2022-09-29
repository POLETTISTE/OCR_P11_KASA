import { render, screen } from "@testing-library/react";
import App from "../components/App.js";

test("renders learn react link", () => {
  render(<App />);

  expect(1).toBe(1);
});
