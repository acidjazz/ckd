<template lang="pug">
#Contact.page
  Hero(page="Contact")
  Card(page="Contact")
</template>

<script>
import Hero from '~/components/Hero.vue'
import Card from '~/components/Card.vue'
export default {
  components: { Hero, Card },
}
</script>
