import { useState, useEffect, useCallback, memo } from 'react';
import { Story } from '../StoryItem';
import { getRemoteStories } from '../../api/services';
import '../../App.css';
import './SearchBox.css';

export type TSearchCallBack = (stories: Story[]) => void;
type TUseCallback = (page: number) => void

export interface ISearchBoxProps {
    returnStoryList: TSearchCallBack,
    currentPage: number
}

enum SearchSortType {
    BY_POPULARITY = "search",
    BY_DATE = "search_by_date"
}

function SearchBox({ returnStoryList, currentPage }: ISearchBoxProps) {
    let [searchText, setSearchText] = useState<string>('');
    let [sortType, setSortType] = useState<string>(SearchSortType.BY_POPULARITY);

    const fetchStories: TUseCallback = useCallback<TUseCallback>(async (page: number) => {
        let stories = await getRemoteStories(sortType, searchText, page);
        returnStoryList(stories);
    }, [searchText, sortType, returnStoryList]);

    useEffect(() => {
        fetchStories(1);
    }, [searchText, sortType, fetchStories]);

    useEffect(() => {
        fetchStories(currentPage);
    }, [currentPage, fetchStories]);

    const checkSortButton = useCallback((buttonSortType: string) => {
        if (buttonSortType === sortType)
            return { background: "#ccc" }
        else
            return undefined;
    }, [sortType]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text: string = e.target.value;
        setSearchText(text);
    };

    return (
        <div className="search-box">
            <label htmlFor="search-input">Search terms</label>
            <input id="search-input" onChange={handleInputChange} className="search-input" />

            <div className="sort-box">
                <span>Sort by</span>
                <div className="button-group">
                    <button className="button"
                        style={checkSortButton(SearchSortType.BY_POPULARITY)}
                        onClick={() => setSortType(SearchSortType.BY_POPULARITY)}>Popularity</button>

                    <button className="button"
                        style={checkSortButton(SearchSortType.BY_DATE)}
                        onClick={() => setSortType(SearchSortType.BY_DATE)}>Date</button>
                </div>
            </div>
        </div>
    );
};

export default memo(SearchBox);