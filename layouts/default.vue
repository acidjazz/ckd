<template lang="pug">
  #CKD
    // Top
    nuxt
    Bottom
    Modal
</template>

<script>
import Top from '~/components/Top.vue'
import Modal from '~/components/Modal.vue'
import Bottom from '~/components/Bottom.vue'
export default {
  components: { Top, Modal, Bottom },
}
</script>

<style lang="stylus">
json('../assets/colors.json')

html,body 
  margin 0
  padding 0

@font-face
  font-family 'Letter Gothic'
  font-style normal
  src url('/fonts/letter-gothic/Letter Gothic.ttf') format('truetype')

@font-face
  font-family 'Prestige Elite'
  font-style normal
  src url('/fonts/prestige-elite/Standard.otf') format('opentype')

@font-face
  font-family 'Prestige Elite Bold'
  font-style normal
  src url('/fonts/prestige-elite/Bold.ttf') format('truetype')

body, button, input, select, textarea
  font-family 'Letter Gothic'

.clear
  &:before
  &:after
    content: ""
    display: table
  &:after
    clear: both
  zoom: 1 if support-for-ie

.container
  position relative
  max-width 1200px
  margin auto

</style>
