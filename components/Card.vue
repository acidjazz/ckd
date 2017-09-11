<template lang="pug">
.card
  .container
    .title tailored interests
    .est
      .year 2011
      .copy established
    .copy Catherine Kwong Design specializes in high-end residential and hospitality projects, with an emphasis on modern architecture and custom detailing. The firm brings a fresh approach to elegant, tailored interiors-mixing modern with vintage; high art with personal treasures- to create moments of unexpected beauty.
    .clear
</template>

<style lang="stylus">
json('../assets/colors.json')
.card
  background-color iceberg
  padding 90px 30px
  > .container
    > .title
      display inline-block
      transform rotate(-90deg)
      color froly
      margin-top 130px
    > .copy
      width 400px
      float right
      line-height 30px
      margin-right 30px
    .est
      float right
      > .year
        font-size 30px
        letter-spacing 16px
        padding 0 0 10px 0
        text-align center
      > .copy
        text-transform uppercase
        letter-spacing 4px
        font-size 12px

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
