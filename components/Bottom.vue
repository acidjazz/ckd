<template lang="pug">
#Bottom.is-c1sb
  .container
    .footer
      .copy.is-c1sb &copy; CATHERINE KWONG DESIGN, 2011
      .copy.is-c1sb
        | SITE BY
        a(href="https://designsakestudio.com",target="_new") DESIGNSAKE STUDIO
        |  &amp;
        a(href="https://256.io",target="_new") 256

    //.baddress
      .copy CATHERINE KWONG DESIGN
      a.copy(href="https://goo.gl/maps/jKFZqnJU4P6c9",target="_new") 3450 Sacramento Street #519
      a.copy(href="https://goo.gl/maps/jKFZqnJU4P6c9",target="_new") san francisco, ca
      a.copy(href="https://goo.gl/maps/jKFZqnJU4P6c9",target="_new") 9.4.1.1.8
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
    > .footer
      float left
      > .copy
        padding 4px 0
        color black
        text-decoration none
        > a
          color black
          text-decoration none
          transition all 0.2s ease
          &:hover
            color rgba(black, 0.5)
            text-decoration underline

@media all and (min-width: 1px) and (max-width: 1000px)
  #Bottom
    padding 20px 10px
    > .container
      text-align center
      > .footer
        float none

</style>
