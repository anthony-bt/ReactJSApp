import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// Mock the CSS imports
jest.mock('./styles.css', () => ({}));
jest.mock('@fontsource/roboto/300.css', () => ({}));
jest.mock('@fontsource/roboto/400.css', () => ({}));
jest.mock('@fontsource/roboto/500.css', () => ({}));
jest.mock('@fontsource/roboto/700.css', () => ({}));

// Mock the fetch function
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          articles: [
            {
              url: 'https://example.com/article1',
              urlToImage: 'https://example.com/image1.jpg',
              title: 'Article 1',
              description: 'Description 1',
            },
            {
              url: 'https://example.com/article2',
              urlToImage: 'https://example.com/image2.jpg',
              title: 'Article 2',
              description: 'Description 2',
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('renders App component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/My React App/i)).toBeInTheDocument();
});
