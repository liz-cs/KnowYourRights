import React from 'react';
import { render } from '@testing-library/react-native';

import Page3_English from '../Page3_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<Page3_English />);
  expect(getAllByText('Taking time off').length).toBe(1);
});