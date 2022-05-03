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

/*
.toBeDefined() is used to verify that a variable is not undefined. This is often the first thing checked.

.toEqual() is used to perform deep equality checks between objects.

.toBe() is similar to .toEqual() but is used to compare primitive values.

.toBeTruthy() is used to verify whether a value is truthy or not.

.not is used before another matcher to verify that the opposite result is true

.toContain() is used when we want to verify that an item is in an array. In this case, since the .not matcher is used, we are verifying that "Ice Cream" is NOT in the array.
*/