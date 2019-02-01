<template>
  <div class="images">
    <div v-if="info">
      <v-layout row wrap xs12>
        <v-flex xs12 sm6 md4 v-for="(item, index) in info" :key="index">
          <ImageCard :image="item" />
        </v-flex>
      </v-layout>
    </div>
    {{errors}}
  </div>
</template>

<script>
// libraries
import axios from 'axios';

// components
import ImageCard from '@/components/ImageCard.vue'

const HTTP = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/`,
});

export default {
  name: 'images',
  data () {
    return {
      info: null,
      errors: null,
    }
  },
  components: {
    ImageCard,
  },
  created () {
    HTTP
      .get('search?api_key=Hu1LB6RNMM019M9beWcZXFYzXR83cyaz', {
        params: {
          q: 'mfw',
          limit: 20,
          offset: 0,
          rating: 'PG',
          lang: 'en'
        },
      })
      .then(response => {
        this.info = response.data.data
      })
      .catch((e) => {
        this.errors = e
      })
  },
}
</script>
