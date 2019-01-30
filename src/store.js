import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    genre: '',
  },
  mutations: {
    SEARCH_GENRE: (state, genre) => {
      console.log('SEARCH_GENRE genre', genre)
      state.genre = genre
    }
  },
  actions: {

  }
})
