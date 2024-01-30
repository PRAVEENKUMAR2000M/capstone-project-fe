import instance from "./instance";


const getMessage = async () => {
    const response = await instance.protectedInstance.get('/message/getmessage')
    if (response.data) {
        return response.data
    } {
        console.log('error to get the message')
    }
}

export default getMessage