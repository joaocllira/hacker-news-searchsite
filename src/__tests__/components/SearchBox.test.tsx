import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Story } from '../../components/StoryItem';
import SearchBox from '../../components/SearchBox';
import '@testing-library/jest-dom';

test('renders a SearchBox', () => {
    render(<SearchBox returnStoryList={(stories: Story[]) => { }} currentPage={1} />);

    /** Testing the initial value of the search input to be empty */
    const searchInput: HTMLInputElement = screen.getByRole('textbox');
    expect(searchInput.value).toBe('');

    /** testing if the value of the search input changes correctly */
    userEvent.type(searchInput, 'Steve Jobs');
    expect(searchInput.value).toBe('Steve Jobs');

    // screen.debug(undefined, 300000);
});
