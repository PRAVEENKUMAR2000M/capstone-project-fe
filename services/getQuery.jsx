import instance from "./instance";

const getQuery = async (candidateID) => {
    try {
        console.log('data fetching');

        const response = await instance.protectedInstance.get('/query/getQuery', {
            params: {
                candidateID: candidateID
            }
        });

        console.log(response);
        return response.data.candidateQueries;

    } catch (error) {
        console.log(error);
    }
}

export default getQuery;
