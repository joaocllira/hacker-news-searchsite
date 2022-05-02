import { Story } from '../components/StoryItem';

const BASE_URL = 'http://hn.algolia.com/api/v1';

interface IStories {
    hits: Story[]
}

export async function getRemoteStories(sortType: string, searchText: string, page: number): Promise<Story[]> {
    let results: any = await fetch(`${BASE_URL}/${sortType}?query=${searchText}&tags=story&page=${page}`);

    let stories: IStories = await results.json();

    return stories.hits;
}