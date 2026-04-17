import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Screenshots Work link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Screenshots Work/i);
  expect(linkElement).toBeInTheDocument();
});
