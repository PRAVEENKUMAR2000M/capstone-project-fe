import instance from "./instance";

const authServices = {
    signup: async (user) => {
        try {
            console.log('user registering')
            const response = await instance.authInstance.post('/candidate/signup', user)
            if (response.data) {
                console.log('user registering successfully')
                return response.data
            } else {
                console.log('error registering')
                return response.data
            }
        } catch (error) {
            console.log('error registering user')
            return error.response.data;
        }
    },
    signin: async (user) => {
        try {
            console.log('user authoticating ....')
            const response = await instance.authInstance.post('/candidate/signin', user)
            if (response.data) {
                console.log('user authonticate successfully')

                sessionStorage.setItem('token', response.data.token)
                return response.data
            } else {
                console.log('authonticate faild')
                return response.data
            }
        } catch (error) {
            console.log('faild due to technical issue')
            return error.response.data
        }
    }
}

export default authServices