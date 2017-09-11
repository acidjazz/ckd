<template lang="pug">
.modal.is-active
  .modal-background
  .modal-content
    .content coming soon
</template>

<script>
export default {

}
</script>

<style lang="stylus">

.modal
  bottom 0
  left 0
  right 0
  top 0
  align-items center
  box-align center
  justify center
  position fixed
  z-index 20
  overflow hidden
  display none

  &.is-active
    display flex

.modal-background
  bottom 0
  left 0
  right 0
  top 0
  position absolute
  background-color rgba(10, 10, 10, 0.86)

.modal-content
  display block
  margin 0 auto
  max-height calc(100vh - 40px)
  width 640px
  overflow auto
  position relative

.content
  padding 30px
  background-color white
  text-transform uppercase
  font-size 35px
  text-align center
  display block

</style>
