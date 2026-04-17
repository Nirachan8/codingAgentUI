import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link and click button', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const buttonElement = screen.getByText('Click me');
  expect(linkElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
