import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Phase 6 Ready/i);
  expect(linkElement).toBeInTheDocument();
});
