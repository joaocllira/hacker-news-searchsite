import { memo } from 'react';
import '../../App.css';
import './StoryItem.css';

export interface Story {
    id: number,
    title: string,
    author: string,
    score: number,
    link: string,
    created_at: string,
    points: number;
    relevancy_score: number,
    url: string
};

interface IStoryProps {
    story: Story
}

export function StoryItem({ story }: IStoryProps) {
    const date = new Date(story.created_at);

    return (
        <li className="story-item flexbox row">
            <div className="column title-column">
                <p>
                    <b>{story.title}</b> <i>by {story.author}</i></p>
                <p><a href={story.url}>{story.url}</a> - Posted on {date.toLocaleDateString("pt-BR")}</p>
            </div>
            <div className="column score-column">
                <p>{story.relevancy_score || "No score"}</p>
            </div>
        </li>
    );
};

export default memo(StoryItem);
