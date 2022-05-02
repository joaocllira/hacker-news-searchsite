import { createRoot } from 'react-dom/client';
import StoriesContainer from '.';

it('renders a StoriesContainer without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<StoriesContainer />,)
});
