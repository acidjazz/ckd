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
</template>

<style lang="stylus">
#Projects
  > .container
    > .title
      float left
      padding 0 0 20px 0
      border-bottom 4px solid black
    > .projects
      margin 30px 0
      display flex
      flex-wrap wrap
      > .project
        width 33%
        > .image
          > img
            width 100%
        &:nth-child(3n-2) > .image
          margin 20px 30px 20px 0px
        &:nth-child(3n-1) > .image
          margin 20px 15px 20px 15px
        &:nth-child(3n) > .image
          margin 20px 0 20px 30px
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
