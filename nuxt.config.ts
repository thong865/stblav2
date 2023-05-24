
export default defineNuxtConfig({
    vite: {
        plugins: [
            // eslintPlugin()
        ]
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            title: 'ທະນາຄານ ເອັສທີ ຈຳກັດ ປະກາດຂາຍຫຼັກຊັບ',
            meta: [
                { name: 'description', content: 'ຝາກເງິນ, ຖອນເງິນ, ຊຳລະບິນ, ຈ່າຍເງິນ, ເງິນກູ້, ຂາຍຫຼັກຊັບ ຂອງ ທອທ' }
            ],
            link: [
                {
                    hid: 'icon',
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'stb.svg'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss', '@intlify/nuxt3', '@pinia/nuxt', 'nuxt-icon', 'nuxt-swiper'
    ],
    intlify: {
        localeDir: 'lang',
        vueI18n: {
            locale: 'lo',
            fallbackLocale: 'lo'
        }
    },
    css: [
        '~/assets/css/tailwindcss.css',
        '~/assets/css/app.css',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    runtimeConfig: {
        apiSecret: '123',
        public: {
            apiBase: process.env.BASE_SRV_API,
            streamBase: process.env.BASE_SRV_STRM
        }
    },
})
