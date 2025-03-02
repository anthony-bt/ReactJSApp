import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/My React App/i)).toBeInTheDocument();
});