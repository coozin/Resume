import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchEntry: '',
  },
  mutations: {
    SEARCH_MUSIC: (state, searchEntry) => {
      state.searchEntry = searchEntry
    },
  },
  actions: {

  }
})
