<template lang="pug">
section#Projects.section
  .container
    .title.is-h1.is-uppercase featured projects
    .clear
    .projects
      a.project(v-for="project, key in projects",:href="`/project/${key}/`")
        .image
          img(:src="`/projects/${project.thumb}`")
      //.project(v-for="i in 9")
        .image
          img(:src="'/projects/CKD_344x290_' + i + '.jpg'")
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
          margin 20px
          > img
            width 100%
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
