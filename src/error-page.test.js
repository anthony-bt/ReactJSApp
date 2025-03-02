import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./error-page";

test('renders ErrorPage component', () => {
  const { getByText } = render(<ErrorPage />);
  expect(getByText(/404 - Page Not Found/i)).toBeInTheDocument();
});