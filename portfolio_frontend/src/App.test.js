import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Projects section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /projects/i });
  expect(heading).toBeInTheDocument();
});
