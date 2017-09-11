let colors = 'assets/colors.json'
module.exports = {
  /*
  ** Headers 
  */
  head: {
    title: 'Catherine Kwong Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cathering Kwong Design' },
      { name: 'theme-color', content: colors.bunker },
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: colors.bunker },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css', integrity: 'sha256-CDVQJfU+jJGU/oyDzvnzuGXbv0rz+SyBsPQwyn7x/jQ=', crossorigin: 'anonymous' },
    ]
  },
  /*
  ** Progress-bar color
  */
  loading: { color: colors.bunker },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
