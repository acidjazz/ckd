<template lang="pug">
#Jobs.page
  Card(page="Jobs")
  .container
    .bigtitle.is-h1(v-in-viewport.once) Open Positions
    .clear

    .jobs-list
      .job
        .title.is-h4(v-in-viewport.once) DESIGNER  

        .subtitle.is-h2(v-in-viewport.once) Responsibilities
        ul(v-in-viewport.once)
          li Work directly with Principal to design and manage projects
          li Lead teams through all phases of projects: programming client needs, conceptual design, design development, purchasing + production, project management, and installation
          li Source furnishings + artwork, as well as design custom pieces
          li Coordinate directly with clients to keep projects running smoothly and on time
          li Work with vendors and artists to keep projects running smoothly and on time
          li Contribute to the firm in a way that pushes us to constantly elevate our work and our style
        .subtitle.is-h2(v-in-viewport.once) Qualifications
        ul(v-in-viewport.once)
          li 4+ years experience
          li Degree in Interior Design or Interior Architecture
          li Proficiency in AutoCAD, Sketchup, and Adobe Creative Suite
          li Proficiency in construction documents and details
          li Proficiency in purchasing systems
          li Strong visual communication style
          li Strong sense of organization and professionalism

      .job
        .title.is-h1(v-in-viewport.once) DESIGN ASSISTANT
        .subtitle.is-h2(v-in-viewport.once) Responsibilities
        ul(v-in-viewport.once)
          li Work directly with Designers to assist with the design and management of projects
          li Assist teams with design development, purchasing + production, project management, and installation of projects
          li Coordinate with Designers to keep projects running smoothly and on time
          li Work with vendors and artists to keep projects running smoothly and on time
          li Oversee office management duties to keep teams organized and informed

        .subtitle.is-h2(v-in-viewport.once) Qualifications
        ul(v-in-viewport.once)
          li 1+ years experience
          li Degree in Interior Design or Interior Architecture
          li Proficiency in AutoCAD, Sketchup, and Adobe Creative Suite
          li Strong visual communication style
          li Strong sense of organization and professionalism

    .apply(v-in-viewport.once) To apply for a position, please submit a resume and portfolio to 
      a(href="mailto:careers@catherinekwong.com").is-bunker careers@catherinekwong.com.

</template>

<script>
import Card from '~/components/Card.vue'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  components: { Card },
  directives: { 'in-viewport': inViewportDirective },
  created () {
    this.$store.commit('menuColor', 'black')
  },
}
</script>


<style lang="stylus">
@import '../assets/stylus/mixins'
#Jobs.page
  > .container
    padding 120px 0
    .bigtitle
      inViewport(0)
      float left
      clear both
      padding 0 0 30px 0
      border-bottom 5px solid black
      text-transform uppercase
.jobs-list
  padding 30px 0
  .job
    padding 30px 0 60px 0
  .title
    inViewport(0)
    padding 0 0 30px 0
  .subtitle
    padding 20px 0 20px 10px
    inViewport(0.2)

  ul
    inViewport(0.3)
  li
    list-style-type disc
    margin 0 0 0 40px

.apply
  padding 30px 0 0 0
  text-align center
  inViewport(0.5)
  a
    text-decoration none
</style>
