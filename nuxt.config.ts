// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     modules: [
        '@nuxtjs/tailwindcss'
    ],

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        // 'vuetify/lib/styles/main.css'
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
            'vuetify'
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
    }
})
