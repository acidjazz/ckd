<template lang="pug">
#Bottom.is-c1sb
  .container
    .menu
      a.option(@click="$store.commit('modalOn')") inquire
      .clear
      a.option(@click="$store.commit('modalOn')") press
      .clear
      .copy &copy; CATHERINE KWONG DESIGN, 2011
      .copy SITE BY DESIGNSAKE STUDIO

    .baddress
      .copy CATHERINE KWONG DESIGN
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") 2100 Bryant street
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") san francisco, ca
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") 9.4.1.1.0
      .socials
        a.social.social_pinterest pinterest
        .separator
        a.social.social_instagram instagram
    .clear
</template>

<style lang="stylus">
json('../assets/colors.json')
#Bottom
  padding 60px
  text-transform uppercase
  letter-spacing 2px
  > .container
    > .menu
      float left
      > a.option,
      > .copy
        padding 4px 0
      > a.option
        display inline-block
        cursor pointer
        &:hover
          background-color black
          color white
    > .baddress
      float right
      > .copy
        padding 4px 0
        color black
        text-decoration none
        display block
      > .socials
        padding 10px 0 0 0
        > .social,
        > .separator
          float left
        > .separator
          width 1px
          height 10px
          background-color black
          margin 0 10px
        > .social
          cursor pointer
          &:hover
            background-color black
            color white

@media all and (min-width: 1px) and (max-width: 1000px)
  #Bottom
    padding 20px 10px
    > .container
      text-align center
      > .menu
        float none
      > .address
        float none
        > .socials
          padding 20px 0 0 0
          > .separator,
          > .social
            float none
            display inline-block

</style>
