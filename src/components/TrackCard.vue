<template>
  <v-card flat class="mb-2 mt-2 ml-2 mr-2">
    <v-layout row wrap>
      <v-flex md6 xs12>
        <div class="my-center">
          <iframe :src='songLink' frameborder='0'></iframe>
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
      outLink: ''
    }
  },
  watch: {
    track: function () {
      if (this.track && this.track !== null && this.track['eId']){
        this.checkTrackEid(this.track['eId']);
      }
      

      console.log("TRACK (watch)", this.track)
    }
  },
  created () {
    this.checkTrackEid(this.track['eId']);
    console.log("TRACK (created)", this.track)
  },
  methods: {
    checkTrackEid (eId) {
      if (!eId){
        return 
      }

      let arr = eId.split('/', 3)
      let arrScPlay = eId.split('/playlists/', 2)
      let arrScTrack = eId.split('/tracks/', 2)


      if (arr[1]) {
        if (arr[1] === "yt"){
          this.songSource = "yt"
          this.songLink = `https://www.youtube.com/embed/${arr[2]}`
          this.outLink = `https://www.youtube.com/watch?v=${arr[2]}`
        } else if (arr[1] === "sc") {
          this.songSource = "sc"
          const linkBase = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/'
          this.outLink = `https://soundcloud.com/${arr[2]}`
          let soundCloudLink = arr[2]

          if (arrScPlay.length === 2) {
            // is playlist
            soundCloudLink = `playlists/${arrScPlay[1]}`
          } else if (arrScTrack.length === 2) {
            // is track
            soundCloudLink = `tracks/${arrScTrack[1]}`
          }

          console.log('soundCloudLink', soundCloudLink)
          
          let removeSecretTokenArr = soundCloudLink.split('?', 2)

          if (removeSecretTokenArr.length === 2) {
            this.songLink = `${linkBase}${removeSecretTokenArr[0]}`
          } else {
            this.songLink = `${linkBase}${soundCloudLink}`
          }
        } else if (arr[1] === "vi") {
          this.songSource = "vi"
          this.songLink = `https://player.vimeo.com/video/${arr[2]}`
          this.outLink = `https://vimeo.com/${arr[2]}`
        }
      }
    },
    open () {
      window.open(this.outLink, '_blank')
    }
  }
}
</script>

<style scoped>
.my-center {
  text-align: center;
}
</style>

