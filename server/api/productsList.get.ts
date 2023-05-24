export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const { cat } = getQuery(event);
    const rs = $fetch(`${config.public.apiBase}/markets/products`)
    return rs;
})