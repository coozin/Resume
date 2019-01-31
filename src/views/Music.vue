<template>
  <v-app>
    <v-container>
      <v-layout justify-center>
        <h1 class="display-1 mb-0">Search for what's hot</h1>
      </v-layout>
      <v-layout justify-center>
        <div class="subheader grey--text mb-5">with 
          <a href="https://www.openwhyd.org">openwhyd's</a> api
        </div>
      </v-layout>
      <SearchBy />
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
import SearchBy from '@/components/SearchBy.vue';

const HTTP = axios.create({
  baseURL: `https://openwhyd.org/`
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
    SearchMusic,
    SearchBy
  },
  computed: {
    ...mapState([
      'genre',
      'searchType'
    ])
  },
  watch: {
    genre: function() {
      this.search(this.searchType)
    },
    searchType: function() {
      console.log(this.searchType)
    }
  },
  mounted () {
    this.search(this.searchType)
  },
  methods: {
    search (searchTypeLocal) {
      let route = 'hot/'
      console.log(searchTypeLocal)

      if (searchTypeLocal === "genre") {
        route = `hot/${this.genre}`
      } else if (searchTypeLocal === "artist") {
        route = `search?q=${this.genre}`

        HTTP
        .get(route, {
          params: {
            format: 'json',
            limit: 100,
          },
        })
        .then(response => {
          this.info = response.data.results
        })
        .catch((e) => {
          this.errors = e
        })

        return
      }
      HTTP
        .get(route, {
          params: {
            format: 'json',
            limit: 100,
          },
        })
        .then(response => {
          this.info = response.data
        })
        .catch((e) => {
          this.errors = e
        })
    }
  }
}
</script>
