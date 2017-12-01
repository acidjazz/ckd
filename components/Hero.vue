<template lang="pug">
.hero(v-on:scroll="scroll()",:class="{'hero-Home': page === 'Home', 'hero-Contact': page === 'Contact'}")
  .container
    .seal(v-if="page === 'Home'",v-in-viewport)
      include ../static/seal.svg

    .logo(v-if="page === 'Home'",v-in-viewport)
      img(src="/logo.svg")

    CAddress(v-if="page === 'Home'",v-in-viewport)
    Socials(v-if="page === 'Home'",v-in-viewport)
</template>

<script>
import CAddress from '~/components/CAddress'
import Socials from '~/components/Socials'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { CAddress, Socials },
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
@import '../assets/stylus/mixins'
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
      inViewportScale(0)
      > svg > path
        fill white
    > .seal
      inViewportFade(0.2)
    > .address
      inViewportFade(0.3)
    > .socials
      inViewportFade(0.4)


@media all and (min-width: 1px) and (max-width: 1000px)
  .hero
    > .container
      > .logo
        margin-top 25vh
        width 90%
        height 260px

</style>
