import React from 'react';
import { render } from '@testing-library/react-native';

import Page4_English from '../Page4_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page4_English />);
  expect(getAllByText('Quit, fired or laid off').length).toBe(1);
});