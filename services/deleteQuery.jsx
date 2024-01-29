import instance from "./instance";

const deleteQuery = async (queryId) => {
    console.log('query deleting')
    const response = await instance.protectedInstance.delete(`/query/deletequery/${queryId}`)
    if (response.data.deleteQuery) {
        return response.data.deleteQuery
    }
}

export default deleteQuery