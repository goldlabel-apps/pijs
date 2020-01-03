import React from 'react';
import { render } from '@testing-library/react';
import AppShell from './AppShell';

test('contains app name', () => {
  const { getByText } = render(<AppShell />);
  const linkElement = getByText(/PiJS/i);
  expect(linkElement).toBeInTheDocument();
});
