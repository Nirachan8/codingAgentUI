import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello Demo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Demo/i);
  expect(linkElement).toBeInTheDocument();
});
