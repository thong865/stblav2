export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const rs = $fetch(`${config.public.apiBase}/city/provincWithRef`)
    return rs;
})