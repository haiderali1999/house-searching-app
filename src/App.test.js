// MyComponent.test.tsx
import React from 'react';
import ReactDOM from "react-dom"
import App from "./main-app"

test('renders message correctly', () => {
  const { getByText } = ReactDOM.render(<App  />);
  const messageElement = getByText(/Hello, Jest!/i);
  expect(messageElement).toBeInTheDocument();
});
