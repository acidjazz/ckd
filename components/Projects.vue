<template>
  <section
    id="Projects"
    class="section"
  >
    <div class="container">
      <div class="title is-h1 is-uppercase">
        featured projects
      </div>
      <div class="clear" /><br>
      <nuxt-link
        v-in-viewport
        class="project-featured"
        to="/project/seacliff"
      >
        <div class="project-image">
          <img :src="`/projects/${project_featured.thumb}`">
        </div>
        <div class="project-detail">
          <p>{{ project_featured.hover }}</p>
        </div>
      </nuxt-link>
      <div class="projects">
        <nuxt-link
          v-for="project in projects_not_featured"
          :key="project.url"
          v-in-viewport
          class="project"
          :to="`/project/${project.url}`"
        >
          <div class="project-image">
            <img
              :src="`/projects/${project.thumb}`"
              alt="Project"
            >
          </div>
          <div class="project-detail">
            <p>{{ project.hover }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
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
    projects_not_featured () {
      return this.projects.filter(project => !project.featured)
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
