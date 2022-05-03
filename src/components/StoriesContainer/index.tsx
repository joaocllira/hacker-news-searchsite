import { useState, useCallback, useMemo, memo } from 'react';
import SearchBox from '../SearchBox';
import StoryItem from '../StoryItem';
import PageChanger from '../PageChanger';
import { Story } from '../StoryItem';
import '../../App.css';
import './StoriesContainer.css';

function StoriesContainer() {
    let [storiesList, setStoriesList] = useState<Story[]>();
    let [currentPage, setCurrentPage] = useState<number>(1);

    const returnStoryList = useCallback((stories: Story[]) => {
        setStoriesList(stories);
    }, []);

    const returnCurrentPage = useCallback((page: number) => setCurrentPage(page), []);

    const ulStoryListing = useMemo(() => (
        <ul>
            <>
                {storiesList?.map((story, index) => (
                    <StoryItem key={index} story={story} />
                ))}
            </>
        </ul>
    ), [storiesList]);

    return (
        <div className="stories-container">
            <SearchBox returnStoryList={returnStoryList} currentPage={currentPage} />

            <hr />

            <div className="stories-list">
                <h2>Stories Found</h2>

                <PageChanger returnCurrentPage={returnCurrentPage} />

                {storiesList && storiesList.length < 1 && <h5>There are no stories</h5>}

                {storiesList && storiesList?.length >= 1 && ulStoryListing}
            </div>
        </div>
    );
};

export default memo(StoriesContainer);