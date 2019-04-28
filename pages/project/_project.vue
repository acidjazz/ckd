<template lang="pug">
#Project.page
  .banner
    .container
      .location.is-h3(v-in-viewport) {{ project.location }}
      //.image(:style="`width: ${project.hero.width}px; height: ${project.hero.height}px;`")
      .image.no-parallax(
        :style="`background-image: url(/projects/${project.url}/${project.hero.file})`",
        v-in-viewport
      )
        img(:src="`/projects/${project.url}/${project.hero.file}`")

  .body
    .title.is-h1b(v-in-viewport) {{ project.title }}
    .copy(v-if="project.copy",v-in-viewport) {{ project.copy }}

  .gallery
    .tile(
      v-for="image, file in project.images",
      :class="image.ises"
      )
      .image(
        v-in-viewport,
        :style="`width: ${image.width}px; height: ${image.height}px; background-image: url(/projects/${project.url}/${file})`"
      )
        img(:src="`/projects/${project.url}/${file}`")

    .clear

  .nav.is-c4
    .container
      router-link.cta.prev(:to="`/project/${previous_project.url}`") &lt; PREVIOUS
      router-link.cta.next(:to="`/project/${next_project.url}`") NEXT &gt;
    .clear

</template>

<style lang="stylus">
@import '../../assets/stylus/mixins'

#Project
  img
    opacity 1
    width 100%
    height 100%
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
        inViewportFade(1)
        transform rotate(-90deg)
        position absolute
        bottom 95px
        left -120px
        width 220px
        height 30px
      > .image > .Masthead
        height 70vh !important
        min-height 70vh !important
      > .image.no-parallax
        background-size cover
        background-position 50% 50%
        margin auto
        width 1176px
        height 774px
        overflow hidden
        inViewportScale(0)

  > .body
    max-width 900px
    margin auto
    padding-bottom 90px
    > .title
      inViewportFade(0.1)
    > .copy
      padding 60px 0 0 0
      width 540px
      inViewportFade(0.2)

  > .gallery
    width 1176px
    margin auto
    > .tile
      .image
        overflow hidden
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
        overflow hidden
        > .image
          inViewport(0)
      > .image
        background-size contain

@media all and (min-width: 1px) and (max-width: 1000px)
  #Project
    img
      width 100%
      height 90vw
      object-fit cover
    > .banner
      padding 90px 0 30px 0
      > .container
        > .location
          display none
        > .image.no-parallax
          width auto
          height 50vh
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
import projects from '@/mixins/projects.js'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  mixins : [ projects ],
  computed:  {

    current_project () {

      if (this.projects[this.$route.params.project]) {
        return this.projects[this.$route.params.project]
      }

      for (let project of this.projects) {
        if (project.url === this.$route.params.project) {
          return project
        }
      }

      return false

    },

    project_urls () {
      return this.projects.map( (project) => project.url)
    },

    next_project () {

      let index = this.project_urls.indexOf(this.current_project.url)+1
      if (index > (this.project_urls.length+1) ) {
        index = 0
      }
      for (var project of this.projects) {
        if (project.url === this.project_urls[index]) {
          return project
        }
      }

      return project
    },

    previous_project () {

      let index = this.project_urls.indexOf(this.current_project.url)-1
      if (index < 0) {
        index = this.project_urls.length-1
      }
      for (var project of this.projects) {
        if (project.url === this.project_urls[index]) {
          return project
        }
      }

      return project
    },



    project () {

      let project = this.current_project
      let images = {}

      if (project.gallery !== undefined) {

        for (let [image, value] of Object.entries(project.gallery)) {
          let sizes = image.replace('2013', '').replace('2017', '').match(/\d+/g)
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

}
</script>
