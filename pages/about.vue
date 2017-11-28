<template lang="pug">
#About.page
  .container
    .bigtitle.is-h1(v-in-viewport) ABOUT CKD
    .clear
    .sections
      .section(v-in-viewport)
        .thumb.thumb_residential
        .title.is-c4b RESIDENTIAL
        p From San Francisco to Napa Valley, to Hawaii and beyond, we specialize in designing high-end residential interiors, with a focus on modern architecture and custom furniture and detailing.
      .section(v-in-viewport)
        .thumb.thumb_hospitality
        .title.is-c4b HOSPITALITY
        p We believe that a commercial space can still feel like a home - albeit one without all of that pesky laundry to do. We bring an elevated aesthetic and a healthy dose of fun to all of our hospitality projects.
      .section(v-in-viewport)
        .thumb.thumb_lifestyle
        .title.is-c4b LIFE STYLE
        p Whether it's organizing a big launch event or styling an intimate family photo shoot, we are happy to step in to take care of all the details for you. Life should be celebrated, and we're here to help.
      .clear
    .bigtitle.is-h1(v-in-viewport) ABOUT THE PRINCIPAL
    .clear
    .principal
      .image(v-in-viewport)
        .inner
      .copy(v-in-viewport)
        .inner Catherine Kwong started her career in New York, designing luxury interiors for Studio Sofield and flagship stores for Ralph Lauren. After many amazing years of learning and cre- ating in the city that never sleeps, she moved home to her beloved San Francisco, and Catherine Kwong Design was open for business in 2011. Over the course of her career, Cath- erine has worked on interior design projects all over the world, some of which have been featured in Architectural Digest, Town and Country, and House Beautiful, among others. She has had the opportunity to work for and learn from such legendary designers as Bill Sofield, Ralph Lauren, and Paul Vincent Wiseman. Catherine holds degrees from Brown University and Parsons School of Design. In 2015, Catherine was named "Designer to Watch" by Architectural Digest.
      .clear

</template>

<style lang="stylus">
@import '../assets/stylus/mixins'

#About.page
  padding 120px 0
  .container
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
          inViewport(0.1)
        &:nth-child(2)
          inViewport(0.2)
        &:nth-child(3)
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

</style>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  created () {
    this.$store.commit('menuColor', 'black')
  },
}
</script>
