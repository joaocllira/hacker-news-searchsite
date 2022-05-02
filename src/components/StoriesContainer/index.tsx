import { useState, useCallback } from 'react';
import { SearchBox } from '../SearchBox';
import { PageChanger } from '../PageChanger';
import '../../App.css';
import './StoriesContainer.css';
import StoryItem from '../Story/Story';

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

function StoriesContainer() {
    let [storiesList, setStoriesList] = useState<Story[]>([]);
    let [currentPage, setCurrentPage] = useState<number>(1);

    const returnStoryList = useCallback((stories: Story[]) => {
        setStoriesList(stories);
    }, []);

    return (
        <div className="stories-container">
            <SearchBox returnStoryList={returnStoryList} currentPage={currentPage} />

            <hr />

            <div className="stories-list">
                <h2>Stories Found</h2>

                <PageChanger returnCurrentPage={useCallback((page: number) => setCurrentPage(page), [])} />

                {storiesList?.length < 1 && <h5>There are no stories</h5>}

                {storiesList?.length >= 1 &&
                    <ul>
                        <>
                            {storiesList.map((story, index) => (
                                <StoryItem key={index} story={story} />
                            ))}
                        </>
                    </ul>}
            </div>
        </div>
    );
};

export default StoriesContainer;