export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const { keyword } = getQuery(event);
    const rs = $fetch(`${config.public.apiBase}/markets/products/categoryexist`)
    return rs;
})