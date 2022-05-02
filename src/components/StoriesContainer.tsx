import { useState, useCallback } from 'react';
import { SearchBox } from './SearchBox';
import '../App.css';
import './StoriesContainer.css';
import StoryItem from './Story';

type TUseCallback = (page: number) => void

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

    const changePage: TUseCallback = useCallback<TUseCallback>((page: number) => {
        if (page < 1) {
            return;
        }
        setCurrentPage(page);
    }, []);

    return (
        <div className="stories-container">
            <SearchBox returnStoryList={returnStoryList} currentPage={currentPage} />

            <hr />

            <div className="stories-list">
                <h2>Stories Found</h2>

                <div>
                    <div className="page-changer" style={{ marginRight: "10px" }}
                        onClick={() => changePage(currentPage - 1)}>
                        &#9194;
                    </div>

                    Page <input value={currentPage} size={4}
                        onChange={({ target }) => changePage(parseInt(target.value))} />

                    <div className="page-changer" style={{ marginLeft: "10px" }}
                        onClick={() => changePage(currentPage + 1)}>
                        &#9193;
                    </div>
                </div>

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