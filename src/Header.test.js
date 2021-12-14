import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

const createToast = jest.fn();

test('renders button text', () => {
  const { getByText } = render(<Header createToast={createToast} />);
  const linkElement = getByText(/NEW SUBMISSION/i);
  expect(linkElement).toBeInTheDocument();
});

test('button fires click', () => {
  const { getByText } = render(<Header createToast={createToast} />);
  fireEvent.click(getByText(/NEW SUBMISSION/i))
  expect(createToast).toHaveBeenCalledTimes(1);
});
