<template lang="pug">
.card.is-bg-iceberg
  .container
    .title.is-froly(v-if="page === 'Home'") tailored interests
    .title.is-froly.title-contact(v-else) contact

    .column(v-if="page === 'Contact'")
      .block.gapped
        .title.is-c4b GIVE US A CALL
        a(href="tel:4157355109") 415.735.5190
      .block
        .title.is-c4b DROP US A LINE
        a(href="mailto:info@catherinekwong.com") E-mail
        a(href="mailto:media@catherinekwong.com") Media Inquries

    .column(v-if="page === 'Contact'")
      .block
        .title.is-c4b COME VISIT US
        a(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") 2100 Bryant Srreet
        a(href="https://goo.gl/maps/3g1zVkK1D3t",target="_new") San Francisco, CA 94110

    .est(v-if="page === 'Home'")
      .year.is-c2 2011
      .copy.is-c3 established
    .copy.is-c4(v-if="page === 'Home'") Catherine Kwong Design specializes in high-end residential and hospitality projects, with an emphasis on modern architecture and custom detailing. The firm brings a fresh approach to elegant, tailored interiors-mixing modern with vintage; high art with personal treasures- to create moments of unexpected beauty.

    .clear
</template>

<style lang="stylus">
.card
  background-color iceberg
  padding 120px 30px
  > .container

    > .title
      text-align center
      display inline-block
      transform rotate(-90deg)
      margin-top 70px
      letter-spacing 5px
      margin-top 130px
      &.title-contact
        margin-top 70px

    > .column
      float right
      width 360px
      .block
        &.gapped
          padding 0 0 20px 0
      a
        display block
        text-decoration none
        color black
        margin 5px 0

    > .copy
      width 400px
      float right
      line-height 30px
      margin-right 30px

    .est
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
    padding 30px 10px
    > .container
      > .title
        transform rotate(0deg)
        margin-top 30px
      > .copy
        width auto
        margin-right 0
        margin-top 30px

</style>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'Home',
    }
  }
}
</script>
