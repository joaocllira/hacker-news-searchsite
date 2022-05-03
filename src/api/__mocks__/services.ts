const getRemoteStories = jest.fn(() => {
    return Promise.resolve({
        status: '',
        data: []
    });
});

export default getRemoteStories;
