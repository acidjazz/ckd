<template lang="pug">
#Top
  .container
    .burger(
      @click="on = !on",
      :class="{off: !on, on: on, white: ($store.state.menu === 'white' || on), black: $store.state.menu === 'black'}"
    )
      .lines
        span
        span
        span
        span
  transition(name="fade")
    .menu(v-if="on")
      .container

        router-link.seal(to="/",@click.native="on = false")
          include ../static/seal.svg

        .options
          router-link.option(to="/",@click.native="scrollTo('#Projects')").is-h4 Projects
          router-link.option(to="/about",@click.native="on = false").is-h4 About
          router-link.option(to="/press",@click.native="on = false").is-h4 Press
          router-link.option(to="/contact",@click.native="on = false").is-h4 Contact
          router-link.option(to="/jobs",@click.native="on = false").is-h4 jobs

        CAddress
        Socials

</template>


<script>
import CAddress from '~/components/CAddress'
import Socials from '~/components/Socials'
export default {
  components: { CAddress, Socials },
  methods: {
    scrollTo (el) {
      this.on = false
      setTimeout(() => {
        document.querySelector(el).scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        })
      }, 800)
    },
  },
  data () {
    return {
      on: false,
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/fonts.json')
json('../assets/colors.json')
#Top
  position fixed
  width 100%
  transition z-index 0.2s ease-in-out 0s
  z-index 150
  > .menu
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color black
    > .container
      position relative
      height 100%
      > .options
        display flex
        flex-direction column
        height calc(100vh - 300px)
        justify-content center
        > .option
          color white
          text-decoration none
          width fit-content
          padding 30px 0px 10px 0px
          margin-left 40px
          border-bottom 4px solid transparent
          transition all 0.3s ease 0s
          text-transform uppercase
          letter-spacing 2px
          &:hover
            color rgba(white, 0.30)
            border-bottom 4px solid rgba(white, 0.30)
          for i in 1..5
            &:nth-child({i})
              transition-delay unit(0.03 * i, 's')
  > .container
    > .burger
      cursor pointer
      position absolute
      transition z-index 0.2s ease-in-out 0s, transform 0.25s ease-in-out
      top 60px
      right 2px
      clear both
      width 50px
      height 30px
      padding 10px
      z-index 150
      &.black > .lines > span
        background-color black
      &.white > .lines > span
        background-color white
      &.on > .lines > span:nth-child(1)
        top 18px
        width 0%
        left 50%
      &.on > .lines > span:nth-child(2)
        transform rotate(45deg)
      &.on > .lines > span:nth-child(3)
        transform rotate(-45deg)
      &.on > .lines > span:nth-child(4)
        top 18px
        width 0%
        left 50%

      > .lines
        position relative
        width 100%
        height 100%
        > span
          display block
          position absolute
          height 3px
          width 100%
          opacity 1
          left 0
          transition 0.25s ease-in-out
          &:nth-child(1)
            top 0px
          &:nth-child(2),
          &:nth-child(3)
            top 14px
          &:nth-child(4)
            top 28px

.fade-enter-active, .fade-leave-active 
  transition all .5s

.fade-enter, .fade-leave-to
  opacity 0
  .options .option
    transform translate(-25px, 0)

@media all and (min-width: 1px) and (max-width: 1000px)
  #Top
    .container
      .burger
        top 20px
        right 20px
        width 40px
        height 20px
</style>
