import React from 'react';
import { render } from '@testing-library/react-native';

import Page1_English from '../Page1_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page1_English />);
  expect(getAllByText('Hours of works').length).toBe(1);
});