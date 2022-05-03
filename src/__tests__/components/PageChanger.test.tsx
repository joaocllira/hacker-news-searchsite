import { screen, render } from '@testing-library/react';
import PageChanger from '../../components/PageChanger';
import '@testing-library/jest-dom';

test('renders a PageChanger', () => {
    render(<PageChanger returnCurrentPage={(page: number) => { }} />,);

    /** Testing the initial value of the page input to be '1' */
    const pageInput: HTMLInputElement = screen.getByRole('textbox');
    expect(pageInput.value).toBe('1');

    // screen.debug(undefined, 300000);
});
