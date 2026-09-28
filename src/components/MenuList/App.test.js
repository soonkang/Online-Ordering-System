import { render, screen } from '@testing-library/react';
import ListMenu from './ListMenu';

test('renders learn react link', () => {
  render(<ListMenu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});