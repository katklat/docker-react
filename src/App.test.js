import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn ruby link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn ruby/i);
  expect(linkElement).toBeInTheDocument();
});

