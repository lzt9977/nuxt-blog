module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/assets/sass/main.scss', lang: 'scss' }
  ],
  build: {
    vendor: [
      'element-ui',
      'axios',
      '~/plugins/fetch.js'
    ],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  plugins: ['~plugins/element-ui'],
  babel: {
    plugins: [
      [
        'component', [
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default',
        }]]],
  },
  proxy: [
    [
      '/api',
      {
        target: 'http://localhost:3030',
      },
    ],
  ],
  router: {
    middleware: 'checkAuth'
  }
}
