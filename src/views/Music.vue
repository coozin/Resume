<template>
  <v-app>
    <SearchMusic />
    <v-container v-if="info && info.tracks">
      <div v-for="(item, index) in info.tracks" :key="index">
        <TrackCard :track="item" />
      </div>
    </v-container>
    {{errors}}
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
import TrackCard from '@/components/TrackCard.vue';
import SearchMusic from '@/components/SearchMusic.vue';

const HTTP = axios.create({
  baseURL: `https://openwhyd.org/hot/`
});

export default {
  name: 'music',
  data () {
    return {
      info: null,
      errors: null,
    }
  },
  computed: {
    ...mapState([
      'genre'
    ])
  },
  watch: {
    genre: function() {
      HTTP
        .get(this.genre, {
          params: {
            format: 'json'
          },
        })
        .then(response => {
          this.info = response.data
        })
        .catch((e) => {
          this.errors = e
        })
    },
  },
  components: {
    TrackCard,
    SearchMusic
  },
  created () {
    HTTP
      .get(this.genre, {
        params: {
          format: 'json'
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
</script>
