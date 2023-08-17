import React from 'react';
import { render } from '@testing-library/react-native';

import Page2_English from '../Page2_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page2_English />);
  expect(getAllByText('Statutory holiday').length).toBe(1);
});