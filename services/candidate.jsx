import instance from "./instance"

const getCandidate = async () => {
    try {
        console.log('fetching user')
        const response = await instance.protectedInstance.get('/candidate/getcandidate')
        if (response.data.candidate) {
            return response.data.candidate
        } else {
            return null;
        }
    } catch (error) {
        console.log('error fetching the data', error)
    }
}

export default getCandidate