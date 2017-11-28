<template lang="pug">
.hero(v-on:scroll="scroll()",:class="{'hero-Home': page === 'Home', 'hero-Contact': page === 'Contact'}")
  .container
    .seal(v-if="page === 'Home'")
      include ../static/seal.svg

    .logo(v-if="page === 'Home'")
      include ../static/logo.svg

    a.address(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new",v-if="page === 'Home'")
      .copy 2100 Bryant street
      .copy san francisco, ca
      .copy 9.4.1.1.0

    .socials(v-if="page === 'Home'")
      a.social.social_pinterest(@click="$store.commit('modalOn')") pinterest
      a.social.social_instagram(@click="$store.commit('modalOn')") instagram
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'Home',
    }
  },
  methods: {
    scroll (event) {
      if (window.scrollY < window.innerHeight) {
        if (this.$store.state.menu !== 'white') {
          this.$store.commit('menuColor', 'white')
        }
      }
      if (window.scrollY > window.innerHeight) {
        if (this.$store.state.menu !== 'black') {
          this.$store.commit('menuColor', 'black')
        }
      }
    }
  },

  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.scroll)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.scroll)
    }
  },

}
</script>

<style lang="stylus">

.hero
  background-size cover
  background-position 50% 50%
  position relative
  &.hero-Home
    height 100vh
    background-image url('/static/banner.jpg')
  &.hero-Contact
    height 80vh
    background-image url('/static/contact.jpg')
  > .container
    height 100%

    > .logo
      width 800px
      margin auto
      margin-top 22vh

    > .socials,
    > .address
      color white
      letter-spacing 3px
      text-transform uppercase
      text-decoration none
      position absolute
      bottom 60px
    > .address
      left 30px
    > .socials
      right 30px
      > .social
        display block
        cursor pointer
        margin 10px 0 0 0
        &:hover
          background-color white
          color black

@media all and (min-width: 1px) and (max-width: 1000px)
  .hero
    padding 10px
    > .container
      > .logo
        margin-top 30px
        width 100%
        height 260px
      > .socials, > .address
        font-size 10px

</style>
