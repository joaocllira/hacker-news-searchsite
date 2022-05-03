import { screen, render } from '@testing-library/react';
import StoriesContainer from '../../components/StoriesContainer';
import '@testing-library/jest-dom';

test('renders a PageChanger without crashing', async () => {
    render(<StoriesContainer />,);

    /** Testing the initial state of the list, when it has not been loaded */
    const emptyStoriesList = await screen.queryByRole('list');
    expect(emptyStoriesList).toBeNull();

    /** Testing the list after it's been fetched from the API */
    const storiesList: HTMLElement = await screen.findByRole('list', undefined, { timeout: 5000 });
    expect(storiesList).toBeInTheDocument();

    // screen.debug(undefined, 300000);
});

