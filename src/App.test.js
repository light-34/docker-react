import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders the logo image', async () => {
  await act(async () => {
    render(<App />);
  });
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

