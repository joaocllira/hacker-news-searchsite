import { useState, useEffect, useCallback } from 'react';
import { Story } from '../StoryItem';
import '../../App.css';
import './SearchBox.css';

export type TSearchCallBack = (stories: Story[]) => void;
type TUseCallback = (page: number) => void

export interface ISearchBoxProps {
    returnStoryList: TSearchCallBack,
    currentPage: number
}

interface IStories {
    hits: Story[]
}

enum SearchSortType {
    BY_POPULARITY = "search",
    BY_DATE = "search_by_date"
}

export function SearchBox({ returnStoryList, currentPage }: ISearchBoxProps) {
    let [searchText, setSearchText] = useState<string>('');
    let [sortType, setSortType] = useState<string>(SearchSortType.BY_POPULARITY);

    const fetchStories: TUseCallback = useCallback<TUseCallback>(async (page: number) => {
        let results: any = await fetch(`http://hn.algolia.com/api/v1/${sortType}?query=${searchText}&tags=story&page=${page}`);

        let stories: IStories = await results.json();

        returnStoryList(stories.hits);
    }, [searchText, sortType, returnStoryList]);

    useEffect(() => {
        fetchStories(1);
    }, [searchText, sortType, fetchStories]);

    useEffect(() => {
        fetchStories(currentPage);
    }, [currentPage, fetchStories]);

    function checkSortButton(buttonSortType: string) {
        if (buttonSortType === sortType)
            return { background: "#ccc" }
        else
            return undefined;
    }

    return (
        <div className="search-box">
            <label htmlFor="search-input">Search terms</label>
            <input id="search-input" onChange={(e) => {
                let text: string = e.target.value;
                setSearchText(text);
            }} className="search-input" />

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
}