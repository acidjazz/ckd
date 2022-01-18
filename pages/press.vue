<template>
  <div
    id="Press"
    class="page"
  >
    <Card page="Press" />
    <div class="container">
      <div class="press">
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_sunset" />
          <p class="is-c4b">
            SUNSET | October 2017
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_modern" />
          <p class="is-c4b">
            SAN FRANCISCO | Fall 2017
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_elle1" />
          <p class="is-c4b">
            ELLE DECOR | September 2017
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_cali" />
          <p class="is-c4b">
            CALIFORNIA HOMES | Summer 2017
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_luxe" />
          <p class="is-c4b">
            LUXE | January/February 2017
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_digest" />
          <p class="is-c4b">
            ARCHITECTURAL DIGEST | January 2015
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_ca" />
          <p class="is-c4b">
            CA HOME AND DESIGN | Spring 2014
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_7x7" />
          <p class="is-c4b">
            7x7 | October 2013
          </p>
        </div>
        <div
          v-in-viewport
          class="kit"
        >
          <div class="image image_house" />
          <p class="is-c4b">
            HOUSE BEAUTIFUL | September 2012
          </p>
        </div>
        <div class="clear" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  components: { Card },
  directives: { 'in-viewport': inViewportDirective },
  created () {
    this.$store.commit('menuColor', 'black')
  },
}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
.press
  padding 90px 0
  > .kit
    width 33%
    float left
    padding 0 0 60px 0
    for i in 1..3
      &:nth-child(3n+{i})
        inViewport(0.2 * i)
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
      &.image_ca
        background-image url(/press/Press4_332x422px.jpg)
      &.image_7x7
        background-image url(/press/Press6_332x422px.jpg)
      &.image_digest
        background-image url(/press/Press7_332x422px.jpg)
      &.image_house
        background-image url(/press/Press8_332x422px.jpg)
      &.image_luxe
        background-image url(/press/Press9_332x422px.jpg)
    > p
      text-align center

@media all and (min-width: 1px) and (max-width: 1000px)
  #Press
    .press
      .kit
        width 100%
        float none

</style>
