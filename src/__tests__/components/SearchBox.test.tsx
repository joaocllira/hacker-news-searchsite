import { createRoot } from 'react-dom/client';
import SearchBox from '../../components/SearchBox';
import { Story } from '../../components/StoryItem';

it('renders a SearchBox without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<SearchBox returnStoryList={(stories: Story[]) => { }} currentPage={1} />,)
});
