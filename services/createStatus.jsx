import instance from "./instance";

const createStatus = async (payload) => {
    try {
        const response = await instance.protectedInstance.post('/status/createstatus', payload)
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.log('error creating the status', error)
    }
}

export default createStatus