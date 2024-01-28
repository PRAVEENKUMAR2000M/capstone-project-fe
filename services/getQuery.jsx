import instance from "./instance";


const getQuery = async () => {
    try {
        console.log('data fetching')
        const response = await instance.protectedInstance.get('/query/getQuery')
        console.log(response)
        
        return response.data.candidateQueries
        
    } catch (error) {
        console.log(error)
    }
}

export default getQuery