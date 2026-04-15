import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Reactjs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Reactjs/i);
  expect(linkElement).toBeInTheDocument();
});
