export const useCity = async () => {
    const { data } = await useFetch('/api/city')
    return {
        provinces: data
    }
}