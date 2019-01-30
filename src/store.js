import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genre: '',
    searchType: ''
  },
  mutations: {
    SEARCH_GENRE: (state, genre) => {
      state.genre = genre
    },
    SEARCH_BY: (state, searchType) => {
      state.searchType = searchType
    }
  },
  actions: {

  }
})
