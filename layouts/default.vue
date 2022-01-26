<template>
  <div id="CKD">
    <top />
    <nuxt />
    <bottom />
    <modal />
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Modal from '~/components/Modal.vue'
import Bottom from '~/components/Bottom.vue'
export default {
  components: { Top, Modal, Bottom },
}
</script>
