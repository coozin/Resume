<template>
  <v-app>
    <v-layout class="padding">
      <v-flex xs12 sm8 offset-sm2>
        <v-btn
          class="blue lighten-2"
          dark
          large
          to="/"
        >
          Home
        </v-btn>
        <v-card flat class="card-padding">
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-0">Josh Shouppe</h1>
              <div class="grey--text">Web Developer (React.js, Vue.js)</div>
            </div>
          </v-card-title>
          <v-layout>
            <v-flex xs12 md9>
              <v-card-text>
                <div>
                  <h3 class="blue--text">Experience</h3>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>SOMA Global</b>, Tampa, FL - <i>Senior Frontend Engineer</i></div>
                  <div class="grey--text">Feb 2019 - Nov 2019</div>
                  <blockquote>Dispatch software for first responders. Definitely an exciting project to be a part
                    of. Police, sheriffs, and firefighters use SOMA's software to dispatch units into the field and
                    respond to emergencies. This was a web-based solution with servers on premise or in the cloud.
                    But this software did so much more than just that. We used GoLang for API development. Angular 1 
                    for V1 (still maintained) and react with redux for V2.
                  </blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>Halo Platform</b>, Remote - <i>Frontend Engineer</i></div>
                  <div class="grey--text">Feb 2018 - Nov 2018</div>
                  <blockquote>Lead frontend development of centralized exchange (vue.js, vuex). 
                    Built admin portal and worked with admin REST APIs. Worked on decentralized 
                    exchange until launch. Using GraphQL created snapshots of tickers in node.js, 
                    adapted ticker data to OHLC for custom datafeed for TradingView chart. Customized 
                    and implemented charting. Using vuetify library, created frontend components for 
                    decentralized exchange. Worked with websockets for live datafeed. </blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>iGenius</b>, Milan, Italy - <i>Frontend Web Developer</i></div>
                  <div class="grey--text">Feb 2017 - Feb 2018</div>
                  <blockquote>Using react.js with redux, developed frontend components for virtual 
                    advisor to manage social channels and marketing strategies. Product called “Crystal”.</blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>Accenture</b>, Milan, Italy - <i>Application Developer</i></div>
                  <div class="grey--text">Feb 2015 - June 2017</div>
                  <blockquote>Started out as intern due to language barrier, promoted to senior 
                    and given work visa once language and communication was sufficient. Developed 
                    frontend components consulting for companies such as Unicredit, Fiat, Jeep, Kitkat, 
                    Nestle, and Monte dei Paschi di Siena. JavaScript, REST, jQuery, SASS/LESS.</blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>Zenzio</b>, Tampa, FL - <i>Jr. Web Developer</i></div>
                  <div class="grey--text">Sep 2014 - Feb 2015</div>
                  <blockquote>C#, MVC, HTML, CSS. Began career in frontend learning the basics.</blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <h3 class="blue--text">Education</h3>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <div><b>University of South Florida</b>, Tampa, FL - <i>Management Information Systems</i></div>
                  <div class="grey--text">Sep 2009 - Sep 2014</div>
                  <blockquote>Bachelor of Science</blockquote>
                </div>
              </v-card-text>
            </v-flex>
            <v-flex xs12 md3 class="hidden-sm-and-down">
              <v-card-text>
                <div>
                  <h3 class="blue--text">Skills</h3>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <blockquote>JavaScript, ES6, Vue.js, vuex, react.js, redux, node.js, 
                    REST API’s, websockets, charting, TradingView, 
                    HTML5, CSS/SASS/LESS, Bootstrap, Vuetify, Material Design, GoLang, Angular 1</blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <h3 class="blue--text">OS's</h3>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <blockquote>Linux (many distros), MacOS, Windows</blockquote>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <h3 class="blue--text">Languages</h3>
                </div>
              </v-card-text>
              <v-card-text>
                <div>
                  <blockquote>Native English,</blockquote>
                  <blockquote>Conversational & Professional Italian</blockquote>
                </div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<style scoped>
.padding {
  padding-top: 40px;
}
.card-padding {
  padding: 20px;
}
</style>
