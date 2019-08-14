
export const state = () => ({
    modal: false,
    menu: 'black',
})

export const mutations = {
  menuColor (state, color) {
    state.menu = color
  },
  modalOn (state) {
    state.modal = true
  },
  modalOff (state) {
    state.modal = false
  },
}
