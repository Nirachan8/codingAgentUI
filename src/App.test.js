import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Phase 5 Complete link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Phase 5 Complete/i);
  expect(linkElement).toBeInTheDocument();
});
