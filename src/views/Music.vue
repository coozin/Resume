<template>
  <div>
    <v-layout>
      <div v-if="info && info.tracks">
        <div v-for="item in info.tracks" :key="item._id">
          <TrackCard :track="item"/>
        </div>
      </div>
    </v-layout>
    {{errors}}
  </div>
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
        console.log(response.data)
      })
      .catch((e) => {
        this.errors = e
      })
  }
}
</script>
