import { createRoot } from 'react-dom/client';
import { Story } from '../StoryItem';
import { StoryItem } from '.';

const story: Story = {
    id: 1,
    title: "Title",
    author: "Author",
    score: 10,
    link: "http://www.test.com",
    created_at: new Date().toString(),
    points: 10,
    relevancy_score: 1000,
    url: "http://www.test.com"
}

it('renders a StoryItem without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<StoryItem story={story} />,);
});