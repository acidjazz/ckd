<template lang="pug">
.hero(v-on:scroll="scroll()")
  .container
    .seal
      include ../static/seal.svg

    .logo
      include ../static/logo.svg

    a.address(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new").is-c1b
      .copy 295 kansas street
      .copy san francisco, ca
      .copy 9.4.1.0.3

    .socials.is-c1b
      a.social.social_pinterest(@click="$store.commit('modalOn')") pinterest
      a.social.social_instagram(@click="$store.commit('modalOn')") instagram
</template>

<script>
export default {
  methods: {
    scroll (event) {
      if (window.scrollY < 400) {
        if (this.$store.state.menu !== 'white') {
          this.$store.commit('menuColor', 'white')
        }
      }
      if (window.scrollY > 400) {
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
  background-image url('/static/banner.jpg')
  background-size cover
  background-position 50% 50%
  position relative
  height 100vh
  > .container
    height 100%
    > .seal
      width 90px
      height 90px
      padding-top 60px
      padding-left 60px
      > svg
        width inherit
        height inherit
        > circle
          fill none
          stroke white
          stroke-width 3
          border 10px solid white
        > path
          fill white

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
