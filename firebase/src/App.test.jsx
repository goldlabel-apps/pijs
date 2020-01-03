import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('contains app name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/PiJS/i);
  expect(linkElement).toBeInTheDocument();
});
