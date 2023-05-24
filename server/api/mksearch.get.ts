export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const { keyword,province,district,priceMin,priceMax,cat } = getQuery(event);
    console.log(config)
    const rs = $fetch(`${config.public.apiBase}/markets/mksearch?keyword=${keyword}${province ? '&province='+province :''}
    ${district ? '&district='+district :''}${cat ? '&cat='+cat :''}`, { method: 'POST' })
    return rs;
})