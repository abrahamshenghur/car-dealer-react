import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';

test('renders cleanup react app message', () => {
  const { getByText } = screen(<App />);
  const cleanupMessage = getByText(/Cleanedup React App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
