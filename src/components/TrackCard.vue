<template>
  <v-card flat class="mb-2 mt-2 ml-2 mr-2">
    <v-layout row wrap>
      <v-flex md6 xs12>
        <div class="my-center">
          <iframe :src='embeddedLink' frameborder='0'></iframe>
        </div>
      </v-flex>
      <v-flex md6 xs12>
        <v-card-title primary-title class="justify-center">
          <div>
            <h3 class="headline mb-0">{{track ? track['uNm'] : ''}}</h3>
            <div>{{track ? track['name'] : ''}}</div>
          </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn
            class="blue lighten-2"
            dark
            large
            @click="() => open()"
          >
            Play on
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
  data () {
    return {
      songSource: '',
      embeddedLink: '',
      outLink: ''
    }
  },
  watch: {
    track: function () {
      if (this.track && this.track !== null && this.track['eId']){
        this.checkTrackEid(this.track['eId']);
      }
    }
  },
  created () {
    this.checkTrackEid(this.track['eId']);
  },
  methods: {
    checkTrackEid (eId) {
      if (!eId){
        return 
      }

      // determine song source
      let arr = eId.split('/', 3)
      
      if (arr[1]) {
        if (arr[1] === "yt"){
          this.songSource = "yt"
          this.embeddedLink = `https://www.youtube.com/embed/${arr[2]}`
          this.outLink = `https://www.youtube.com/watch?v=${arr[2]}`
        } else if (arr[1] === "sc") {
          this.songSource = "sc"
          this.outLink = `https://soundcloud.com/${arr[2]}`

          this.processScLink(eId, arr)
          
        } else if (arr[1] === "vi") {
          this.songSource = "vi"
          this.embeddedLink = `https://player.vimeo.com/video/${arr[2]}`
          this.outLink = `https://vimeo.com/${arr[2]}`
        }
      }
    },
    open () {
      window.open(this.outLink, '_blank')
    },
    processScLink(eId, arr) {
      // is track or playlist?
      let arrScPlay = eId.split('/playlists/', 2)
      let arrScTrack = eId.split('/tracks/', 2)

      // embedded link base
      const embeddedLinkBase = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/'

      // take what's after "sc" for default
      let soundCloudLink = arr[2]

      if (arrScPlay.length === 2) {
        // is playlist
        soundCloudLink = `playlists/${arrScPlay[1]}`
      } else if (arrScTrack.length === 2) {
        // is track
        let trackId = arrScTrack[1]

        // remove "/stream" (only applies to tracks)
        let trackSplit = trackId.split('/', 2)

        if (trackSplit.length === 2) {
          soundCloudLink = `tracks/${trackSplit[0]}`
        } else {
          soundCloudLink = `tracks/${trackId}`
        }
      }
      
      // remove secret token
      let removeSecretTokenArr = soundCloudLink.split('?', 2)

      if (removeSecretTokenArr.length === 2) {
        this.embeddedLink = `${embeddedLinkBase}${removeSecretTokenArr[0]}`
      } else {
        this.embeddedLink = `${embeddedLinkBase}${soundCloudLink}`
      }
    }
  }
}
</script>

<style scoped>
.my-center {
  text-align: center;
}
</style>

