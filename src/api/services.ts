import { Story } from '../components/StoryItem';
import { fetch } from 'cross-fetch';

const BASE_URL = 'http://hn.algolia.com/api/v1';

interface IStories {
    hits: Story[]
}

export async function getRemoteStories(sortType: string, searchText: string, page: number): Promise<Story[]> {
    let response: any = await fetch(`${BASE_URL}/${sortType}?query=${searchText}&tags=story&page=${page}`);

    let stories: IStories = await response.json();

    return stories.hits;
}
/*
function handleErrors(response: Response): Response {
    if (!response.ok) {
        throw Error(`${response.status} - ${response.statusText}`);
    }
    return response;
}
*/