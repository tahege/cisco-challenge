import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './home';

test('this is an interview project', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Interview Project/i);
  expect(linkElement).toBeInTheDocument();
});
