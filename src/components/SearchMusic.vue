<template>
  <v-layout>
    <v-toolbar flat color="transparent">
      <v-text-field
        class="mt-1 ml-2"
        flat
        label="Search for a song, artist or genre"
        prepend-inner-icon="search"
        solo-inverted
        v-model="searchInput"
      ></v-text-field>
      <v-btn
        @click="() => this.searchGenre()"
        class="blue lighten-2"
        dark
        large
      >
        Go
      </v-btn>
    </v-toolbar>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'searchMusic',
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    ...mapMutations([
      'SEARCH_GENRE'
    ]),
    searchGenre: function() {
      this.SEARCH_GENRE(this.searchInput)
      this.searchInput = ''
    }
  }
}
</script>