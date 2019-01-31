<template>
  <v-card flat class="mb-2 mt-2 ml-2 mr-2">
    <v-layout row wrap justify-center>
      <v-flex md6 xs12>
        <iframe :src='songLink' frameborder='0'></iframe>
      </v-flex>
      <v-flex md6 xs12>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{track['uNm']}}</h3>
            <div>{{track['name']}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn
            class="blue lighten-2"
            dark
            large
            @click="() => open()"
          >
            Open in new window
            <v-icon
              v-if="songSource"
              right
            >
              {{songSource === "yt" ? `fab fa-youtube` :
                songSource === "sc" ? 'fab fa-soundcloud' : 'fab fa-vimeo-v'}}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'trackCard',
  props: {
    track: Object,
  },
  watch: {
    track: function () {
      this.checkTrackEid(this.track['eId']);
    }
  },
  created () {
    this.checkTrackEid(this.track['eId']);
  },
  methods: {
    checkTrackEid (eId) {
      let arr = eId.split('/', 3)
      if (arr[1]) {
        if (arr[1] === "yt"){
          this.songSource = "yt"
          // this.songLink = `https://www.youtube.com/watch?v=${arr[2]}`
          this.songLink = `https://www.youtube.com/embed/${arr[2]}`
        } else if (arr[1] === "sc") {
          this.songSource = "sc"
          this.songLink = `https://soundcloud.com/${arr[2]}`
        } else if (arr[1] === "vi") {
          this.songSource = "vi"
          // this.songLink = `https://vimeo.com/${arr[2]}`
          this.songLink = `https://player.vimeo.com/video/${arr[2]}`
        }
      }
    },
    open () {
      window.open(this.songLink, '_blank')
    }
  }
}
</script>
