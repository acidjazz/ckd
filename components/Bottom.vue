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

    .address
      .copy CATHERINE KWONG DESIGN
      .copy 295 kansas street
      .copy san francisco, ca
      .copy 9.4.1.0.3
      .socials
        a.social.social_pinterest pinterest
        .separator
        a.social.social_instagram instagram
        .separator
        a.social.social_blog blog
    .clear
</template>

<style lang="stylus">
#Bottom
  padding 60px
  text-transform uppercase
  letter-spacing 3px
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
    > .address
      float right
      > .copy
        padding 4px 0
      > .socials
        padding 10px 0 0 0
        > .social,
        > .separator
          float right
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
