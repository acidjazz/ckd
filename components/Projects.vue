<template lang="pug">
section#Projects.section
  .container
    .title.is-h1.is-uppercase featured projects
    .clear
    .projects
      router-link.project(
        v-for="project in projects",
        :to="`/project/${project.url}/`",
        :key="project.url")
        .image
          img(:src="`/projects/${project.thumb}`")
        .detail
          p {{ project.hover }}

</template>

<style lang="stylus">
json('../assets/colors.json')
#Projects
  > .container
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
        width 33%
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
          transform translate(-10px, 0)
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

</style>

<script>
import projects from '~/assets/projects.js'
export default {
  data () {
    return {
      projects: projects
    }
  }
}
</script>
