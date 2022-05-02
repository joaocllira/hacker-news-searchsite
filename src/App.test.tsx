import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Title', () => {
    render(<App />);
    const linkElement = screen.getByText(/A Hacker News Search Website/i);
    expect(linkElement).toBeInTheDocument();
});
