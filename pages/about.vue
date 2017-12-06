<template lang="pug">
#About.page
  Card(page="About")
  .container
    .bigtitle.is-h1(v-in-viewport) ABOUT THE FIRM
    .clear
    .sections
      .section
        .thumb.thumb_residential(v-in-viewport)
        .title.is-c4b(v-in-viewport) RESIDENTIAL
        p(v-in-viewport) From San Francisco to Napa Valley, to Hawaii and beyond, we specialize in designing high-end residential interiors, with a focus on modern architecture and custom furniture and detailing.
      .section
        .thumb.thumb_hospitality(v-in-viewport)
        .title.is-c4b(v-in-viewport) HOSPITALITY
        p(v-in-viewport) We believe that a commercial space can still feel like a home - albeit one without all of that pesky laundry to do. We bring an elevated aesthetic and a healthy dose of fun to all of our hospitality projects.
      .section
        .thumb.thumb_lifestyle(v-in-viewport)
        .title.is-c4b(v-in-viewport) LIFESTYLE
        p(v-in-viewport) Whether it's organizing a big launch event or styling an intimate family photo shoot, we are happy to step in to take care of all the details for you. Life should be celebrated, and we're here to help.
      .clear
    .bigtitle.is-h1(v-in-viewport) ABOUT THE PRINCIPAL
    .clear
    .principal
      .image(v-in-viewport)
        .inner
      .copy(v-in-viewport)
        .inner Catherine Kwong started her career in New York, designing luxury interiors for Studio Sofield and flagship stores for Ralph Lauren. After many amazing years of learning and creating in the city that never sleeps, she moved home to her beloved San Francisco, and Catherine Kwong Design was open for business in 2011. Over the course of her career, Catherine has worked on interior design projects all over the world, some of which have been featured in Architectural Digest, Town and Country, and House Beautiful, among others. She has had the opportunity to work for and learn from such legendary designers as Bill Sofield, Ralph Lauren, and Paul Vincent Wiseman. Catherine holds degrees from Brown University and Parsons School of Design. In 2015, Catherine was named "Designer to Watch" by Architectural Digest.
      .clear

</template>

<style lang="stylus">
@import '../assets/stylus/mixins'

#About.page
  > .container
    padding 120px 0
    .bigtitle
      inViewport(0)
      float left
      clear both
      padding 0 0 30px 0
      margin 0 0 60px 0
      border-bottom 5px solid black
    .sections
      padding 0 0 90px 0
      > .section
        width 33%
        float left
        &:nth-child(1)
          > .thumb
            inViewport(0.1)
          > .title
            inViewport(0.2)
          > p
            inViewport(0.3)
        &:nth-child(2)
          > .thumb
            inViewport(0.1)
          > .title
            inViewport(0.2)
          > p
            inViewport(0.3)
        &:nth-child(3)
          > .thumb
            inViewport(0.1)
          > .title
            inViewport(0.2)
          > p
            inViewport(0.3)
        > .thumb
          width 338px
          height 338px
          background-size cover
          &.thumb_residential
            background-image url(/about/Residential_338x338px.jpg)
          &.thumb_hospitality
            background-image url(/about/Hospitality_338x338px.jpg)
          &.thumb_lifestyle
            background-image url(/about/Lifestyle_338x338px.jpg)
        > .title
          padding 30px 0 10px 0
        > p
          margin-right 60px
    .principal
      .image
        inViewport(0.1)
        width 50%
        float left
        .inner
          width 460px
          height 600px
          background-image url(/about/Catherine_460x600px.jpg)
          background-size cover
      .copy
        inViewport(0.2)
        width 50%
        float left
        > .inner
          margin-right 90px

@media all and (min-width: 1px) and (max-width: 1000px)
  #About.page
    padding 90px 0
    .container
      .bigtitle
        font-size 30px
        text-align center
        float none
        margin 20px
      > .sections
        > .section
          width 100%
          margin 40px 0
          float none
          > .thumb
            margin auto
          > .title
            text-align center
          > p
            margin 20px

      > .principal
        padding 20px
        > .image
          width 100%
          float none
          > .inner
            width 100%
        > .copy
          width 100%
          float none
          > .inner
            margin 30px 0 

</style>

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
