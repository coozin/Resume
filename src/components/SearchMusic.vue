<template>
  <v-container>
    <v-layout>
      <v-flex xs10>
        <v-text-field
          class="mx-3"
          flat
          label="Search"
          prepend-inner-icon="search"
          solo-inverted
          v-model="searchInput"
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-btn
          @click="() => this.searchGenre()"
        >
          Go
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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