
let colors = require('./assets/colors.json')

let config = {
  title: 'Catherine Kwong Design',
  description: 'An acclaimed San Francisco interior design firm. Catherine Kwong Design specializes in high-end residential and hospitality projects, with an emphasis on modern architecture and custom detailing. The firm brings a fresh approach to elegant, tailored interiors — mixing modern with vintage; fine art with personal treasures — to create moments of unexpected beauty.',
  url: 'https://catherinekwong.com',
  image: '/share.jpg',
  keywords: 'design, interior'
}

let routes = []
routes.push('/project/hawaii')
routes.push('/project/pacificheightscontemporary')
routes.push('/project/brown')
routes.push('/project/woodside')
routes.push('/project/sho17')
routes.push('/project/jacksonsquare')
routes.push('/project/pacificheightstownhouse')
routes.push('/project/sho13')
routes.push('/project/cowhollow')
routes.push('/project/seacliff')

module.exports = {

  target: 'static',
  /*
  ** Headers
  */
  head: {
    title: 'Catherine Kwong Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description },
      { name: 'theme-color', content: colors.bunker },

      // Schema.org
      { hid: 'itemprop:name', itemprop: 'name', content: config.title },
      { hid: 'itemprop:description', itemprop: 'description', content: config.description },
      { hid: 'itemprop:image', itemprop: 'image', content: config.url + config.image },

      // facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: config.url },
      { hid: 'og:image', property: 'og:image', content: config.url + config.image },

      { hid: 'og:title', property: 'og:title', content: config.title },
      { hid: 'og:description', property: 'og:description', content: config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: config.url + config.image },

      { hid: 'twitter:title', name: 'twitter:title', content: config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },

    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: colors.bunker },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ]
  },
  /*
  ** Progress-bar color
  */
  loading: { color: colors.bunker },
  /*
  ** Build configuration
  */
  css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],
  plugins: [
    {src: '~plugins/ga.js', ssr: false},
  ],
  build: {
    /*
    ** Run ESLINT on save
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
  },
  generate: { routes: routes }
}
