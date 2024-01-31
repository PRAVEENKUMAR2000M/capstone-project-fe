import instance from "./instance";

const deleteQuery = async (queryId) => {
    console.log('query deleting')
    const response = await instance.protectedInstance.delete(`/query/deletequery/${queryId}`)
    if (response.data.deleteQuery) {
        return response.data.deleteQuery
    }
}

export const  updateQuery = async (queryId, payload) => {
    console.log('query deleting')
    const response = await instance.protectedInstance.put(`/query/deletequery/${queryId}`, payload)
    if (response.data.updateQuery) {
        return response.data.updateQuery
    }
}

export default deleteQuery