import instance from "./instance";

const createMessage = async (payload) => {
    try {
        const response = await instance.protectedInstance.post('/message/createmessage', payload)
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export default createMessage