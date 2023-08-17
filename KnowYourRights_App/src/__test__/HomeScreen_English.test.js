import React from 'react';
import { render } from '@testing-library/react-native';

import HomeScreen_English from '../HomeScreen_English';

console.error = jest.fn();
beforeEach(() => {
  console.error.mockClear();
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Hors of Works').lenth).toBe(1);
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Statutory Holiday').lenth).toBe(1);
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Taking Time Off').lenth).toBe(1);
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Quit, Fired or Laid off').lenth).toBe(1);
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Getting Paid for Work').lenth).toBe(1);
});

it('renders correctly', () => {
  const { getAllByText } = render(<HomeScreen_English />);
  expect(getAllByText('Make a Complaint').length).toBe(1);
});