import instance from "./instance";


const getQuery = async () => {
    try {
        console.log('data fetching')
        const response = await instance.protectedInstance.get('/query/getQuery')
        if (response.data.candidate) {
            return response.data.candidate
        }
    } catch (error) {
        console.log(error)
    }
}

export default getQuery