<template lang="pug">
#Bottom.is-c1sb
  .container
    .menu
      .copy.is-c1sb &copy; CATHERINE KWONG DESIGN, 2011
      a.copy.is-c1sb(href="https://designsakestudio.com",target="_new") SITE BY DESIGNSAKE STUDIO

    //.baddress
      .copy CATHERINE KWONG DESIGN
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") 2100 Bryant street
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") san francisco, ca
      a.copy(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") 9.4.1.1.0
      //.bsocials
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
        color black
        text-decoration none
      > a.option
        display inline-block
        cursor pointer
        &:hover
          color rgba(black, 0.5)
          text-decoration underline
    > .baddress
      float right
      > .copy
        padding 4px 0
        color black
        text-decoration none
        display block
      > .bsocials
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
            color rgba(black, 0.5)
            text-decoration underline

@media all and (min-width: 1px) and (max-width: 1000px)
  #Bottom
    padding 20px 10px
    > .container
      text-align center
      > .menu
        float none
      > .baddress
        margin 20px 0 0 0
        float none
        > .socials
          padding 20px 0 0 0
          > .separator,
          > .social
            float none
            display inline-block

</style>
