<template lang="pug">
section#Projects.section
  .container
    .title.is-h1.is-uppercase featured projects
    .clear
    .projects
      router-link.project(
        v-in-viewport,
        v-for="project, key in projects",
        :to="`/project/${key}/`",
        :key="project.url")
        .image
          img(:src="`/projects/${project.thumb}`")
        .detail
          p {{ project.hover }}

</template>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
#Projects
  > .container
    padding 60px 0
    > .title
      float left
      padding 0 0 20px 0
      border-bottom 4px solid black
      letter-spacing 1px
    > .projects
      margin 30px 0
      display flex
      flex-wrap wrap
      > .project
        position relative
        overflow hidden
        width 33%
        inViewport(0)
        for i in 1..3
          &:nth-child(3n+{i})
            inViewport(0.2 * i)
        > .detail
          position absolute
          top 80px
          left 0px
          background-color white
          text-transform uppercase
          color bunker
          padding 0 20px
          opacity 0
          transition transform 0.6s ease-in-out 0s, opacity 0.4s ease-in-out 0s
          transform translate(0px, 0)
          > p
            opacity 0
            transform translate(-10px, 0)
            transition transform 0.3s ease-in-out 0.3s, opacity 0.2s ease-in-out 0.3s

        &:hover > .detail
          opacity 1
          transform translate(0, 0)
          > p
            opacity 1
            transform translate(0, 0)

        > .image
          > img
            width 100%
        &:nth-child(3n-2)
          > .image
            margin 40px 50px 40px 0px
          > .detail
            left 0px
        &:nth-child(3n-1)
          > .image
            margin 40px 25px 40px 25px
          > .detail
            left 25px
        &:nth-child(3n)
          > .image
            margin 40px 0 40px 50px
          > .detail
            left 50px
@media all and (min-width: 1px) and (max-width: 1000px)
  #Projects > .container
    > .title
      float none
      text-align center
      font-size 30px
      margin 20px 
    > .projects
      > .project
        width 100%
        > .image
          margin 20px !important
        > .detail
          opacity 1
          left 20px !important
          > p
            opacity 1

</style>

<script>
import projects from '~/assets/projects.js'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  data () {
    return {
      projects: projects
    }
  }
}
</script>
