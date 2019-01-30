<template>
  <div class="searchBy">
    <v-flex xs12 sm6 class="py-2">
      <p>Search by:</p>
      <v-btn-toggle
        mandatory
      >
        <v-btn flat @click="() => this.searchBy(0)">
          Genre
        </v-btn>
        <v-btn flat @click="() => this.searchBy(1)">
          Artist
        </v-btn>
      </v-btn-toggle>
    </v-flex>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'searchBy',
  data () {
    return {
      toggle_one: 0,
      options: [
        'genre',
        'artist'
      ]
    }
  },
  created() {
    this.searchBy(0)
  },
  methods: {
    ...mapMutations([
      'SEARCH_BY'
    ]),
    searchBy: function(toggle) {
      console.log('on click', this.options[toggle])
      this.SEARCH_BY(this.options[toggle])
    }
  }
}
</script>
