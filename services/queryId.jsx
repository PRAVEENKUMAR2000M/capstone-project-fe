import instance from "./instance";

const queryId = async (queryId) => {
    try {
        console.log('data')
        const response = await instance.protectedInstance.get(`/query/Queries?queryId=${queryId}`)
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