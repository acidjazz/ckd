<template lang="pug">
.page.page_index
  Hero
  Card
  Projects
</template>

<script>
import Hero from '~/components/Hero.vue'
import Card from '~/components/Card.vue'
import Projects from '~/components/Projects.vue'
export default {
  components: { Hero, Card, Projects }
}
</script>
