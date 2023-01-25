// https://v3.nuxtjs.org/api/configuration/nuxt.config

let development = process.env.NODE_ENV !== 'production'

export default defineNuxtConfig({
     modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],

    css: [
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        // 'vuetify/lib/styles/main.css'
        'maz-ui/css/main.css'
    ],

    plugins: [
        '~/plugins/fontawesome.js',
        '~/plugins/vuetify.js'
    ],

    build: {
        transpile: [
            "@fortawesome/vue-fontawesome",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/free-solid-svg-icons",
            'vuetify',
            'maz-ui',
            'swiper',
            'tailwind-scrollbar-hide',
            'tailwind-scrollbar',
        ]
    },

    buildModules: [
		'@nuxtjs/google-fonts'
	],

    
    googleFonts: {
        display: "swap",
        families: {
            'Montserrat': [100, 200, 300, 400, 500, 600, 700, 800, 900],
        }
    },

    runtimeConfig: {
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
        cryptoScrete: process.env.CRYPTO_SCRETE,
        
        public: {
            baseUrl: development ? 'http://localhost:9000' : process.env.API_BASE_URL
        }
    },

    // router: {
    //     middleware: ['auth']
    // },

    store: true,

    // devServerHandlers: []
})


