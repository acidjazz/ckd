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
</template>

<script>

export default {
  data () {
    return {
      on: false,
    }
  }
}
</script>

<style lang="stylus">
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
    > .burger
      cursor pointer
      position absolute
      transition z-index 0.2s ease-in-out 0s, transform 0.25s ease-in-out
      top 60px
      right 60px
      clear both
      width 60px
      height 40px
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
          height 4px
          border-radius 9px
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
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0

@media all and (min-width: 1px) and (max-width: 1000px)
  .burger
    top 20px
    right 20px
</style>
