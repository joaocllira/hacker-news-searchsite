import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageChanger from '../../components/PageChanger';
import '@testing-library/jest-dom';

test('renders a PageChanger', () => {
    render(<PageChanger returnCurrentPage={(page: number) => { }} />,);

    /** Testing the initial value of the page input to be '1' */
    const pageInput: HTMLInputElement = screen.getByRole('textbox');
    expect(pageInput.value).toBe('1');

    // screen.debug(undefined, 300000);
});

test('clicking change page button', () => {
    render(<PageChanger returnCurrentPage={(page: number) => { }} />,);

    /** Testing click to the increment button */
    const pageInput: HTMLInputElement = screen.getByRole('textbox');
    expect(pageInput.value).toBe('1');

    const incrementButton = screen.getByTestId('button-increment')
    userEvent.click(incrementButton);

    expect(pageInput.value).toBe('2');

    /** Testing click to the decrement button */
    expect(pageInput.value).toBe('2');

    const decrementButton = screen.getByTestId('button-decrement')
    userEvent.click(decrementButton);

    expect(pageInput.value).toBe('1');

    // screen.debug(undefined, 300000);
});
