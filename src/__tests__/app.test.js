import React from "react";
import { render } from "@testing-library/react";
import App from "../App/idex";

describe("App", () => {
  test("should render App component", () => {
    const { getByText } = render(<App />);
    const element = getByText(/React Test/i);
    expect(element).toBeInTheDocument();
  });
});
