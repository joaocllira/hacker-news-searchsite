import { screen, render } from '@testing-library/react';
import App from '../../App';

import '@testing-library/jest-dom';

test('renders the App component', () => {
    render(<App />);

    /** Testing if header is rendered */
    const header: HTMLInputElement = screen.getByText('AHnSW - A Hacker News Search Website');
    expect(header).toBeInTheDocument();

    // screen.debug(undefined, 300000);
});
