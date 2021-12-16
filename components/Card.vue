<template lang="pug">
.card.is-bg-iceberg
  .container
    .title.is-froly(v-in-viewport,v-if="page === 'Home'") established 2011
    .title.is-froly.title-contact(v-in-viewport,v-if="page === 'Contact'") contact
    .title.is-froly.title-press(v-in-viewport,v-if="page === 'Press'") press
    .title.is-froly.title-about(v-in-viewport,v-if="page === 'About'") about
    .title.is-froly.title-about(v-in-viewport,v-if="page === 'Jobs'") careers

    .quote(v-in-viewport,v-if="page === 'About'")
      p Catherine’s talents and strengths place her amidst the upper echelons of an emerging generation of young designers.
      i — William Sofield
    .quote(v-in-viewport,v-if="page === 'Press'")
      p Kwong’s keen interest in modern architecture informs her inviting yet disciplined interiors, where the subtlest nuances sing.
      i - Architectual Digest
    .quote(v-in-viewport,v-if="page === 'Jobs'")
      p Measure twice, cut once.
      // i — William Sofield

    .columns

      .column(v-in-viewport,v-if="page === 'Contact'")
        .block
          .title.is-c4b GIVE US A CALL
          a(href="tel:4157355109") 415.735.5190

      .column(v-in-viewport,v-if="page === 'Contact'")
        .block
          .title.is-c4b DROP US A LINE
          a(href="mailto:hello@catherinekwong.com") E-mail
          a(href="mailto:media@catherinekwong.com") Media Inquries

      .column(v-in-viewport,v-if="page === 'Contact'")
        .block
          .title.is-c4b COME VISIT US
          a(href="https://goo.gl/maps/jKFZqnJU4P6c9",target="_new") 3450 Sacramento Street #519
          a(href="https://goo.gl/maps/jKFZqnJU4P6c9",target="_new") San Francisco, CA 94118

    .copy.is-c4(v-in-viewport,v-if="page === 'Home'") Catherine Kwong Design specializes in high-end residential and hospitality projects, with an emphasis on modern architecture and custom detailing. The firm brings a fresh approach to elegant, tailored interiors-mixing modern with vintage; high art with personal treasures- to create moments of unexpected beauty.

    .clear
</template>

<style lang="stylus">
@import '../assets/stylus/mixins'
.card
  background-color iceberg
  padding 120px 30px
  > .container

    > .title
      inViewportFade(0)
      text-align center
      display inline-block
      transform rotate(-90deg)
      margin-top 70px
      letter-spacing 5px
      &.title-contact
        margin-top 70px
      &.title-press
        margin-top 0px
      &.title-about
        margin-top 0px

    > .columns
      margin-top -50px
      display flex
      justify-content center
      flex-direction row
      align-content center
      margin-left 200px
      > .column
        flex-grow 1
        inViewport(0.1)
        .block
          > .title
            padding 0 0 10px 0
          margin-bottom 10px
        a
          display block
          text-decoration none
          color black
          margin 5px 0

    .quote
      inViewport(0.1)
      margin -70px auto 0 auto
      width 640px

    > .copy
      inViewport(0.1)
      width 600px
      float right
      line-height 30px
      margin-right 30px
      margin-top -40px

    .est
      inViewport(0.2)
      float right
      > .year
        padding 0 0 10px 0
        text-align center
        letter-spacing 13px
      > .copy
        text-transform uppercase
        letter-spacing 4px

@media all and (min-width: 1px) and (max-width: 1000px)
  .card
    padding 30px 20px
    > .container
      > .title
        transform rotate(0deg)
        margin-top 30px
        margin-bottom 30px
        text-align center
        display block
      > .copy
        width auto
        margin-right 0
        margin-top 30px
      > .quote
        width auto
        margin 30px auto

      > .columns
        display block
        margin-top 20px
        margin-left 0px
        > .column
          float none
          width auto
          text-align center
          margin 0 0 30px 0
</style>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  props: {
    page: {
      type: String,
      default: 'Home',
    }
  }
}
</script>
