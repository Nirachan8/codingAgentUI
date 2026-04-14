import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Phase 5 link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Phase 5/i);
  expect(linkElement).toBeInTheDocument();
});
