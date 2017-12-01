<template lang="pug">
#Project.page
  .banner
    .container
      .location.is-h3 {{ project.location }}
      //.image(:style="`width: ${project.hero.width}px; height: ${project.hero.height}px;`")
      .image(v-if="browser()")
        parallax
          img(:src="`/projects/${project.url}/${project.hero.file}`")
      .image(v-else)
        .Masthead
          .is-parallax.Masthead__image
            img(:src="`/projects/${project.url}/${project.hero.file}`")

  .body
    .title.is-h1b(v-in-viewport) {{ project.title }} 
    .copy(v-in-viewport) {{ project.copy }}

  .gallery
    .tile(
      v-for="image, file in project.images",
      :class="image.ises"
      )
      .image(
        v-in-viewport,
        :style="`width: ${image.width}px; height: ${image.height}px; background-image: url(/projects/${project.url}/${file})`"
      )

    .clear

  .nav
    .container
      router-link.cta.prev(
        v-if="$route.params.project !== '1'",
        :to="'/project/' + prev($route.params.project)"
      ) &lt; PREVIOUS
      router-link.cta.next(
        v-if="$route.params.project !== '9'",
        :to="'/project/' + next($route.params.project)"
      ) NEXT &gt;
    .clear

</template>

<style lang="stylus">
@import '../../assets/stylus/mixins'

#Project
  .nav
    .cta
      margin 20px
      color black
      text-decoration none
      transition all .3s ease
      &.prev
        float left
      &.next
        float right
      &:hover
        color rgba(black, 0.5)
        text-decoration underline
  > .banner
    padding 120px 0 90px 0
    > .container
      position relative
      > .location
        transform rotate(-90deg)
        position absolute
        bottom 95px
        left -130px
        width 220px
        height 30px
      > .image > .Masthead
        height 70vh !important
        min-height 70vh !important

  > .body
    max-width 900px
    margin auto
    padding-bottom 90px
    > .title
      inViewport(0.1)
    > .copy
      padding 60px 0 0 0
      width 540px
      inViewport(0.2)

  > .gallery
    width 1176px
    margin auto
    > .tile
      &.is-left
        float left
        margin 30px 30px 30px 0
        > .image
          inViewport(0)
      &.is-right
        float right
        margin 30px 0 30px 30px
        > .image
          inViewport(0.1)
      &.is-double
        margin 30px 0 60px 30px
      &.is-clear
        clear both
        &:before
        &:after
          content: ""
          display: table
        &:after
          clear: both
        zoom: 1 if support-for-ie

      &.is-full
        clear both
        margin 30px 0
        overflow auto
        > .image
          inViewport(0)
      > .image
        background-size contain

@media all and (min-width: 1px) and (max-width: 1000px)
  #Project
    > .banner
      padding 90px 0 30px 0
      > .container
        > .location
          display none
    > .body
      padding 20px
      > .copy
        width 100%
    > .gallery
      width 100%
      > .tile
        padding-bottom 20px
        &.is-left
          float none
          clear both
          margin 0
        &.is-right
          float none
          clear both
          margin 0 
        &.is-full
          float none
          clear both
          margin 0 
        > .image
          width 90vw !important
          height 90vw !important
          height auto
          background-size cover
          background-position 50% 50%
          background-repeat no-repeat
          margin auto


</style>

<script>
import projects from '~/assets/projects.js'
import inViewportDirective from 'vue-in-viewport-directive'
import Parallax from 'vue-parallaxy'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Parallax },
  created () {
    this.$store.commit('menuColor', 'black')
  },
  methods: {
    browser () {
      return process.browser
    },
    prev (param) {
      return (parseInt(param) - 1).toString()
    },
    next (param) {
      return (parseInt(param) + 1).toString()
    },
  },
  computed:  {

    project: function () {
      let project = projects[this.$route.params.project]

      let images = {}

      if (project.gallery !== undefined) {

        for (let [image, value] of Object.entries(project.gallery)) {
          let sizes = image.match(/\d+/g)
          images[image] = {
            width: sizes[0],
            height: sizes[1],
            ises: value
          }
        }

        project.images = images

      }


      return project
    }

  },

}
</script>
