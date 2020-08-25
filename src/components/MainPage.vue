<template>
  <v-app light>
    <v-content>
      <section>
        <Clock
          :style="{
            position: 'absolute',
            top: '25px',
            right: '25px',
            zIndex: '1'
          }"
          class="white--text"
        />
        <v-img :src="`${require(`@/assets/dynamicWallpapers/${wallpaper}`)}`" :aspect-ratio="16/9">
          <v-container fill-height>
            <v-row
              align="center"
              justify="center"
              :style="{width: '100%'}"
            >
              <v-col
                sm="4"
                class="white--text"
              >
                <h1 class="mb-2 display-1 text-xs-center">Hire Josh Shouppe</h1>
                <div class="subheading mb-3 text-xs-center">Web Developer</div>
                <v-btn
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  to="/resume"
                >
                  View full résumé
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Experience</h2>
              <span class="subheading">
                Past projects
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-hands-helping</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Consulting</div>
                    </v-card-title>
                    <v-card-text>
                      Two years experience in consulting with Accenture Italia! Worked on many namebrand projects 
                      such as KitKat, Jeep, Fiat, Unicredit and even a ticketing terminal used by thousands everyday: 
                      <a target="_blank" rel="nofollow" href="https://www.italotreno.it/en/the-train/italo-ticket-office">ItaloTreno</a>. (JavaScript, jQuery, TypeScript, REST APIs, Git)
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-code</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">SaaS</div>
                    </v-card-title>
                    <v-card-text>
                      I spent my last year in Italy working on <a target="_blank" rel="nofollow" href="https://www.crystal.ai">crystal</a> by iGenius. She's 
                      a virtual advisor that helps manage a client's brand. Track invoices, KPIs, and all your social 
                      media in one place. (React.js, Redux, Gitlab Automation, AmCharts, Node.js) 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fab fa-ethereum</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Crypto</div>
                    </v-card-title>
                    <v-card-text>
                      After moving back to the US, I worked remotely for Halo Platform building 
                      cryptocurrency exchanges. Their <a target="_blank" rel="nofollow" href="https://www.halodex.io/">decentralized exchange</a> uses modular Vue.js ui components and is styled by 
                      vuetify (like this site). (Vue.js, Vuex, Apollo GraphQL, WebSockets)
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-shield-alt</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Public Service</div>
                    </v-card-title>
                    <v-card-text>
                      After the crypto bubble went bust. I started working locally in Tampa at <a target="_blank" rel="nofollow" href="https://www.somaglobal.com/">SOMA Global</a> in the public
                      safety arena. I got back to my roots to once again work with react & redux but with some new skills sprinkled in.
                      (React, Redux, GoLang, Angular)
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-chart-line</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Real-time Data</div>
                    </v-card-title>
                    <v-card-text>
                      After moving back to Italy I started at <a target="_blank" rel="nofollow" href="https://www.radicalbit.io/">Radicalbit</a> working with live streaming data and dashboards. 
                      Streaming data and real-time analytics introduced interesting front-end challenges querying data and displaying charts.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('@/assets/green.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">The choice has never been easier</div>
            <em>Contact me today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="mailto:shouppejosh@gmail.com"
            >
              Email
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card flat class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Recent projects</div>
                </v-card-title>
                <v-card-actions
                  class="justify-center"
                >
                  <v-btn
                    class="blue lighten-2 mt-2"
                    dark
                    large
                    to="/music"
                  >
                    Free Music
                  </v-btn>
                  <br />
                  
                </v-card-actions>
                <v-card-actions
                  class="justify-center"
                >
                  <v-btn
                    class="blue lighten-2 mt-2"
                    dark
                    large
                    href="https://github.com/coozin/pixel-art-app"
                    target="_blank"
                  >
                    Pixel Art App
                  </v-btn>
                  
                </v-card-actions>
                
              </v-card>
            </v-flex>

            <v-flex xs12 sm4>
              <v-card flat class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Authorization</div>
                </v-card-title>
                <v-card-text>
                  I'm authorized to live and work in both the USA and EU. I do not require a visa.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4>
              <v-card flat class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact me</div>
                </v-card-title>
                <v-card-text>
                  Email is always preferred
                </v-card-text>
                <v-list class="transparent">
                  
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">fas fa-envelope</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a href="mailto:shouppejosh@gmail.com">shouppejosh@gmail.com</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">fab fa-linkedin</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a target="_blank" href="https://www.linkedin.com/in/joshshouppe/">/in/joshshouppe/</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">fab fa-github</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a target="_blank" href="https://github.com/coozin">/coozin</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
import Clock from '@/components/Clock.vue'
import getWallpaper from '../utils/getWallpaper';
import dynamicImage from '../constants/imageMatch'

export default {
  name: 'MainPage',
  data: function () {
    return {
      wallpaper: dynamicImage[getWallpaper()]
    }
  },
  mounted () {
    this.setWallpaperInterval()
  },
  methods: {
    setWallpaperInterval: function() {
      setInterval(() => {
        this.wallpaper = dynamicImage[getWallpaper()]
      }, 60000)
    }
  },
  components: {
    Clock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
