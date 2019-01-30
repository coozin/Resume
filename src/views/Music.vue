<template>
  <v-app>
    <v-container v-if="info && info.tracks">
      <div v-for="(item, index) in info.tracks" :key="index">
        <TrackCard :track="item" />
      </div>
    </v-container>
    {{errors}}
  </v-app>
</template>

<script>

import axios from 'axios';
import TrackCard from '@/components/TrackCard.vue';

export default {
  name: 'music',
  data () {
    return {
      info: null,
      errors: null,
    }
  },
  components: {
    TrackCard
  },
  mounted () {
    const HTTP = axios.create({
      baseURL: `https://openwhyd.org/hot/`,
    })

    HTTP
      .get('folk', {
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
