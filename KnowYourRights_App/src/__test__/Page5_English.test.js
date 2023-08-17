import React from 'react';
import { render } from '@testing-library/react-native';

import Page5_English from '../Page5_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page5_English />);
  expect(getAllByText('Hours of works').length).toBe(1);
});