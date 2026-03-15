// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TiDbHtondb title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TiDbHtondb/i);
    expect(titleElement).toBeInTheDocument();
});
