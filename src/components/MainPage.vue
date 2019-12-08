<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax :src="require('@/assets/wallhaven.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">Hire Josh</h1>
            <div class="subheading mb-3 text-xs-center">Web Developer</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/resume"
            >
              View full resume
            </v-btn>
          </v-layout>
        </v-parallax>
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
                      <a href="https://www.italotreno.it/en/the-train/italo-ticket-office">ItaloTreno</a>. (JavaScript, jQuery, TypeScript, REST APIs, Git)
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
                      I spent my last year in Italy working on <a href="https://www.crystal.ai">crystal</a> by iGenius. She's 
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
                      cryptocurrency exchanges. Their <a href="https://www.halodex.io/">decentralized exchange</a> uses modular Vue.js ui components and is styled by 
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
                      After the crypto bubble went bust. I started working locally in Tampa at <a href="https://www.somaglobal.com/">SOMA Global</a> in the public
                      safety arena. I got back to my roots to once again work with react & redux but with some new skills sprinkled in.
                      (React, Redux, GoLang, Angular)
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
                  <div class="headline">Recent project</div>
                </v-card-title>
                <v-card-actions
                  class="justify-center"
                >
                  <v-btn
                    class="blue lighten-2 mt-5"
                    dark
                    large
                    to="/music"
                  >
                    Free Music
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
                  I'm authorized to work in the USA.
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
                      <v-list-tile-title><a href="https://www.linkedin.com/in/joshshouppe/">/in/joshshouppe/</a></v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">fab fa-github</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title><a href="https://github.com/coozin">/coozin</a></v-list-tile-title>
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
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
