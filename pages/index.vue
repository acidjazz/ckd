<template>
  <div
    id="Index"
    class="page"
  >
    <Hero />
    <Card page="Home" />
    <Projects />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Card from '~/components/Card.vue'
import Projects from '~/components/Projects.vue'
export default {
  components: { Hero, Card, Projects },
  created () {
    this.$store.commit('menuColor', 'white')
  },
}
</script>
