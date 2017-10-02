<template lang="pug">
#Project.page
  .banner
    .container
      //.image(:style="`width: ${project.hero.width}px; height: ${project.hero.height}px;`")
      .image(v-if="browser()")
        parallax
          img(:src="`/projects/${project.url}/${project.hero.file}`")
      .image(v-else)
        .Masthead
          .is-parallax.Masthead__image
            img(:src="`/projects/${project.url}/${project.hero.file}`")
      .location.is-h2 {{ project.location }}


  .body
    .title.is-h1b {{ project.title }} 
    .copy {{ project.copy }}

  .gallery
    .tile(
      v-for="image, file in project.images",
      :class="image.ises"
      )
      .image(
        v-in-viewport,
        :style="`width: ${image.width}px; height: ${image.height}px; background-image: url(/projects/${project.url}/${file})`"
      )

</template>

<style lang="stylus">
@import '../../assets/stylus/mixins'

#Project
  > .banner
    padding 120px 0 90px 0
    > .container
      > .image > .Masthead
        height 70vh !important
        min-height 70vh !important
       > .location
         transform rotate(-90deg)
         float left
         margin -80px 0 0 -70px

  > .body
    max-width 900px
    margin auto
    padding-bottom 90px
    > .copy
      padding 60px 0 0 0
      width 540px

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
      &.is-clear
        clear both
      &.is-full
        clear both
        margin 30px 0
        overflow auto
        > .image
          inViewport(0)
      > .image
        background-size contain

</style>

<script>
import projects from '~/assets/projects.js'
import inViewportDirective from 'vue-in-viewport-directive'
import Parallax from 'vue-parallaxy'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Parallax },
  methods: {
    browser () {
      return process.browser
    }
  },
  computed:  {

    project: function () {
      let project = projects[this.$route.params.project]

      let images = {}

      for (let [image, value] of Object.entries(project.gallery)) {
        let sizes = image.match(/\d+/g)
        images[image] = {
          width: sizes[0],
          height: sizes[1],
          ises: value
        }
      }

      project.images = images

      return project
    }

  },

}
</script>
