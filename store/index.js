import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    modal: false,
    menu: 'black',
  },

  mutations: {
    menuColor (state, color) {
      state.menu = color
    },

    modalOn (state) {
      state.modal = true
    },
    modalOff (state) {
      state.modal = false
    },
  },
})

export default store
