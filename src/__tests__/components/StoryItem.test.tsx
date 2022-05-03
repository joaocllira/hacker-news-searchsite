import { screen, render } from '@testing-library/react';
import { Story } from '../../components/StoryItem';
import { StoryItem } from '../../components/StoryItem';
import '@testing-library/jest-dom';

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

test('renders a StoryItem', () => {
    render(<StoryItem story={story} />);

    /** Testing if the title is rendered */
    const titleNode: HTMLElement = screen.getByText(story.title);
    expect(titleNode.textContent).toBe('Title');

    /** Testing if the score is rendered */
    const points: HTMLElement = screen.getByText(story.points);
    expect(points.textContent).toBe('10');

    // screen.debug(undefined, 300000);
});
