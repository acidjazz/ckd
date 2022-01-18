<template>
  <transition name="animodal">
    <div
      v-if="modal"
      class="modal is-active"
    >
      <div
        class="modal-background"
        @click="$store.commit('modalOff')"
      />
      <div class="modal-content">
        <div class="content">
          coming soon
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    modal () {
      return this.$store.state.modal
    },
  },
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
  border-radius 5px
  background-color white
  text-transform uppercase
  font-size 35px
  text-align center
  display block

.animodal-enter-active, .animodal-leave-active
  transition opacity 0.5s ease 0s

.animodal-enter-active > .modal-content, .animodal-leave-active > .modal-content
  transition transform 0.4s ease 0.1s, opacity 0.4s ease 0.1s
.animodal-leave-active > .modal-content
  transition transform 0.2s ease 0s, opacity 0.2s ease 0s

.animodal-enter, .animodal-leave-to
  opacity 0
  > .modal-content
    transform scale(0.9)
    opacity 0

@media all and (min-width: 1px) and (max-width: 1000px)
  .modal-content
    width 90%

</style>
