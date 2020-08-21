<template>
  <v-app>
    <v-container>
      <v-btn
        class="blue lighten-2"
        dark
        large
        to="/"
      >
        Home
      </v-btn>
      <v-layout justify-center>
        <h1 class="display-1 mb-0">Listen for free</h1>
      </v-layout>
      <v-layout justify-center>
        <div class="subheader grey--text mb-5">with 
          <a target="_blank" rel="nofollow" href="https://www.openwhyd.org">openwhyd's</a> api
        </div>
      </v-layout>
      <SearchMusic />
      <div v-if="info && info.tracks">
        <div v-for="(item, index) in info.tracks" :key="index">
          <TrackCard :track="item" />
        </div>
      </div>
    </v-container>
    {{errors}}
  </v-app>
</template>

<script>
// libraries
import { mapState } from 'vuex'
import axios from 'axios';

// components
import TrackCard from '@/components/TrackCard.vue';
import SearchMusic from '@/components/SearchMusic.vue';

const HTTP = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://openwhyd.org/`,
});

export default {
  name: 'music',
  data () {
    return {
      info: null,
      errors: null,
    }
  },
  components: {
    TrackCard,
    SearchMusic
  },
  computed: {
    ...mapState([
      'searchEntry',
    ])
  },
  watch: {
    searchEntry: function() {
      if (this.searchEntry === ''){
        this.search(true)
      } else {
        this.search()
      }
    },
  },
  created () {
    this.search(true)
  },
  methods: {
    search (isAll) {
      let route = `search?q=${this.searchEntry}`

      if (isAll) {
        route = `hot/`
      }

      HTTP
        .get(route, {
          params: {
            format: 'json',
            limit: 20,
          },
        })
        .then(response => {
          this.info = isAll ? response.data : response.data.results
        })
        .catch((e) => {
          this.errors = e
        })
    }
  }
}
</script>
