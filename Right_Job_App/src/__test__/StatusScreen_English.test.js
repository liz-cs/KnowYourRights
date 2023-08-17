import React from 'react';
import { render } from '@testing-library/react-native';

import StatusScreen_English from '../StatusScreen_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<StatusScreen_English />);
  expect(getAllByText('Employee').length).toBe(1);
});