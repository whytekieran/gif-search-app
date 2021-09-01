import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders giphy search app root component", () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});
