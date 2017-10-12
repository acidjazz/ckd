<template lang="pug">
  #CKD
    Top
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
