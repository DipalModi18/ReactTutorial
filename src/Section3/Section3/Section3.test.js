import React from 'react';
import { render } from '@testing-library/react';
import App from './Section3';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
