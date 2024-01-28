import instance from "./instance";


const getQuery = async (queryId) => {
    try {
        console.log('data fetching')
        const response = await instance.protectedInstance.get(`/query/Queries?queryId=${queryId}`)
        console.log(response)
        
            return response.data
        
    } catch (error) {
        console.log(error)
    }
}

export default getQuery