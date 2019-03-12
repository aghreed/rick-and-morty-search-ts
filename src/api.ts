const api = {
    search: (resource: string, query: string) => {
        const baseUrl = `https://rickandmortyapi.com/api/${resource}/`;
        const queryString = `?name=${query}`
        const url = `${baseUrl}${queryString}`;
        return fetch(url)
            .then((response) => response.json())
            .then(({ info, results }) => ({ info, results}));
    }
};

export default api;