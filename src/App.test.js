import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CPU Torch Test link', () => {
  render(<App />);
  const linkElement = screen.getByText(/CPU Torch Test/i);
  expect(linkElement).toBeInTheDocument();
});
