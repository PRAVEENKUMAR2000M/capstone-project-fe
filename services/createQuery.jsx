import instance from "./instance"


const createQuery = async (payload) => {
    try {
        console.log('query creating')
        const response = await instance.protectedInstance.post('/query/createQuery', payload)
        if (response.data.createQuery) {
            return response.data.createQuery
        } else {
            return null
        }
    } catch (error) {
        console.log('error creating the query', error)
    }
} 

export default createQuery