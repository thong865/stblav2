export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const { id } = getQuery(event);
    const rs = $fetch(`${config.public.apiBase}/markets/products/${id}`)
    return rs;
})