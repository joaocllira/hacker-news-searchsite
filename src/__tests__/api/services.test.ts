/**
* @jest-environment node
*/

import { getRemoteStories } from '../../api/services';
import { SearchSortType } from '../../components/SearchBox';
import { Story } from '../../components/StoryItem';

test('call to remote api to receive stories', async () => {
    // arrange
    const sortType: string = SearchSortType.BY_POPULARITY;
    const searchTerm: string = "Steve Jobs";
    const page: number = 1;

    // act
    const storiesList: Story[] = await getRemoteStories(sortType, searchTerm, page);

    // assertions
    expect(storiesList).toBeDefined();

    expect(storiesList.length).toBe(20);

    expect(storiesList[0]).toBeTruthy();
}, 10000);
