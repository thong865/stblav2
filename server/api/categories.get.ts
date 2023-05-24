export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const rs = $fetch(`${config.public.apiBase}/markets/category`)
    return rs;
})