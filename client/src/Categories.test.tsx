import React from 'react';
import { render } from '@testing-library/react';
import Categories from './Categories';

test('renders learn react link', () => {
  const { getByText } = render(<Categories />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
