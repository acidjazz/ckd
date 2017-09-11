import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    modal: false,
  },

  mutations: {
    modalOn (state) {
      state.modal = true
    },
    modalOff (state) {
      state.modal = false
    },
  },
})

export default store
