import instance from "./instance";


const getStatus = async () => {
    try {
        const response = await instance.protectedInstance.get(`/status/getstatus`)
        if (response.data) {
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export default getStatus