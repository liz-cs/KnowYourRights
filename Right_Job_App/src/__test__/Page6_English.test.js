import React from 'react';
import { render } from '@testing-library/react-native';

import Page6_English from '../Page6_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page6_English />);
  expect(getAllByText('Name').length).toBe(1);
});