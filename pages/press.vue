<template lang="pug">

#Contact.page
  Card(page="Press")
  .container
    .press
      .kit
        .image.image_sunset
        p.is-c4b SUNSET MAGAZINE | October 2017
      .kit
        .image.image_modern
        p.is-c4b MODERN LUXURY | Fall 2017
      .kit
        .image.image_cali
        p.is-c4b CALIFORNIA HOMES | Fall 2017
      .kit
        .image.image_elle1
        p.is-c4b ELLE DECOR | September 2017
      .kit
        .image.image_elle2
        p.is-c4b ELLE DECOR | July/August 2017
      .clear

</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: { Card },
}
</script>

<style lang="stylus">
.press
  padding 90px 0
  > .kit
    width 33%
    float left
    padding 0 0 60px 0
    > .image
      margin auto
      background-size cover
      width 332px
      height 422px
      border 4px solid black
      &.image_sunset
        background-image url(/press/Press1_332x422px.jpg)
      &.image_modern
        background-image url(/press/Press5_332x422px.jpg)
      &.image_cali
        background-image url(/press/Press2_332x422px.jpg)
      &.image_elle1
        background-image url(/press/Press3_332x422px.jpg)
      &.image_elle2
        background-image url(/press/Press4_332x422px.jpg)
    > p
      text-align center


</style>
