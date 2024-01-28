import instance from "./instance";

const queryId = async () => {
    try {
        console.log('data')
        const response = await instance.protectedInstance.get('/query/Queries')
        if (response.data) {
            return response.data
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
}

export default queryId