import opn from 'opn'

const baseUrl = process.env.BASE_URL != null ? process.env.BASE_URL : 'https://druxt-lb.ddev.site';
const serverIp = process.env.SERVER_IP != null ? process.env.SERVER_IP : 'localhost';

export default {
  head: {
    title: 'quickstart-druxt-site',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],
  ssr: true,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'druxt-site',
  ],
  druxt: {
    baseUrl,
    site: { theme: 'wingsuit' },
      query: {
        includes: ['layout_builder__blocks']
      }
  },

  server: {
    host: serverIp
  },

  build: {
  },
}
