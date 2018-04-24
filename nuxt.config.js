// https://nuxtjs.org/api/configuration-build
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-blog' }
    ]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/assets/sass/main.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  plugins: ['~plugins/element-ui'],
  loading: {
    color: '#ff7e79',
    height: '3px'
  },
  build: {
    vendor: [
      'element-ui',
      'axios',
      '~/plugins/fetch.js',
      'moment'
    ],
  },
  babel: {
    plugins: [
      [
        'component', [
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default',
        }]]],
  },
}
