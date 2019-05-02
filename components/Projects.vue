<template lang="pug">
section#Projects.section
  .container
    .title.is-h1.is-uppercase featured projects
    .clear
    br
    nuxt-link.project-featured(to="/project/seacliff",v-in-viewport)
      .project-image
        img(:src="`/projects/${project_featured.thumb}`")
      .project-detail
        p {{ project_featured.hover }}
    .projects
      nuxt-link.project(
        v-in-viewport,
        v-for="project, index in projects_sorted",
        v-if="!project.featured",
        :to="`/project/${project.url}`",
        :key="project.url")
        .project-image
          img(:src="`/projects/${project.thumb}`")
        .project-detail
          p {{ project.hover }}

</template>

<script>
import projects from '@/mixins/projects.js'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  mixins : [ projects ],
  computed: {
    project_featured () {
      for (let project of this.projects) {
        if (project.featured) {
          return project
        }
      }
      return false
    },
    projects_sorted () {
      return this.projects.slice().sort((a,b) => a.order-b.order)
    },
  },
}
</script>

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
      margin 0 0 30px 0
    .projects
      display flex
      flex-wrap wrap
    .project-featured
      display block
      position relative
      overflow hidden
      width 100%
      inViewport(0.1)
    .project
      position relative
      overflow hidden
      width 33%
      inViewport(0)
      for i in 1..3
        &:nth-child(3n+{i})
          inViewport(0.2 * i)
    .project, .project-featured
      &:hover > .project-detail
        opacity 1
        transform translate(0, 0)
        > p
          opacity 1
          transform translate(0, 0)
    .project
      &:nth-child(3n-2)
        > .project-image
          margin 40px 50px 40px 0px
        > .project-detail
          left 0px
      &:nth-child(3n-1)
        > .project-image
          margin 40px 25px 40px 25px
        > .project-detail
          left 25px
      &:nth-child(3n)
        > .project-image
          margin 40px 0 40px 50px
        > .project-detail
          left 50px

   .project-detail
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

    .project-image
      > img
        width 100%

@media all and (min-width: 1px) and (max-width: 1000px)
  #Projects
    .title
      float none
      text-align center
      font-size 30px
      margin 20px
    .project
      width 100% !important
    .project-image
      margin 20px !important
    .project-detail
      opacity 1
      left 20px !important
      > p
        opacity 1

</style>
