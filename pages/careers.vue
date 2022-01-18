<template>
  <div
    id="Jobs"
    class="page"
  >
    <Card page="Jobs" />
    <div class="container">
      <div
        v-in-viewport.once
        class="bigtitle is-h1"
      >
        Open Positions
      </div>
      <div class="clear" />
      <div class="jobs-list">
        <div class="job">
          <div
            v-in-viewport.once
            class="title is-h4"
          >
            DESIGNER
          </div>
          <div
            v-in-viewport.once
            class="subtitle is-h2"
          >
            Responsibilities
          </div>
          <ul v-in-viewport.once>
            <li>Work directly with Principal to design and manage projects</li>
            <li>Lead teams through all phases of projects: programming client needs, conceptual design, design development, purchasing + production, project management, and installation</li>
            <li>Source furnishings + artwork, as well as design custom pieces</li>
            <li>Coordinate directly with clients to keep projects running smoothly and on time</li>
            <li>Work with vendors and artists to keep projects running smoothly and on time</li>
            <li>Contribute to the firm in a way that pushes us to constantly elevate our work and our style</li>
          </ul>
          <div
            v-in-viewport.once
            class="subtitle is-h2"
          >
            Qualifications
          </div>
          <ul v-in-viewport.once>
            <li>4+ years experience</li>
            <li>Degree in Interior Design or Interior Architecture</li>
            <li>Proficiency in AutoCAD, Sketchup, and Adobe Creative Suite</li>
            <li>Proficiency in construction documents and details</li>
            <li>Proficiency in purchasing systems</li>
            <li>Strong visual communication style</li>
            <li>Strong sense of organization and professionalism</li>
          </ul>
        </div>
        <div class="job">
          <div
            v-in-viewport.once
            class="title is-h1"
          >
            DESIGN ASSISTANT
          </div>
          <div
            v-in-viewport.once
            class="subtitle is-h2"
          >
            Responsibilities
          </div>
          <ul v-in-viewport.once>
            <li>Work directly with Designers to assist with the design and management of projects</li>
            <li>Assist teams with design development, purchasing + production, project management, and installation of projects</li>
            <li>Coordinate with Designers to keep projects running smoothly and on time</li>
            <li>Work with vendors and artists to keep projects running smoothly and on time</li>
            <li>Oversee office management duties to keep teams organized and informed</li>
          </ul>
          <div
            v-in-viewport.once
            class="subtitle is-h2"
          >
            Qualifications
          </div>
          <ul v-in-viewport.once>
            <li>1+ years experience</li>
            <li>Degree in Interior Design or Interior Architecture</li>
            <li>Proficiency in AutoCAD, Sketchup, and Adobe Creative Suite</li>
            <li>Strong visual communication style</li>
            <li>Strong sense of organization and professionalism</li>
          </ul>
        </div>
      </div>
      <div
        v-in-viewport.once
        class="apply"
      >
        To apply for a position, please submit a resume and portfolio to <a
          class="is-bunker"
          href="mailto:careers@catherinekwong.com"
        >careers@catherinekwong.com.</a>
      </div>
    </div>
  </div>
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
