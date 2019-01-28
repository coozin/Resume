<template>
  <v-app>
    <v-layout class="padding">
      <v-flex xs12 sm6 offset-sm3>
        <v-card flat>
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-0">Josh Shouppe</h1>
              <div class="grey--text">Web Developer (React.js, Vue.js)</div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <h3>Halo Platform, Remote - <i>Frontend Engineer</i></h3>
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
              <h3>Accenture, Milan, Italy - <i>Application Developer</i></h3>
              <div class="grey--text">Feb 2015 - June 2017</div>
              <blockquote>Started out as intern due to language barrier, promoted to senior 
                and given work visa once language and communication was sufficient. Developed 
                frontend components consulting for companies such as Unicredit, Fiat, Jeep, Kitkat, 
                Nestle, and Monte dei Paschi di Siena. JavaScript, REST, jQuery, SASS/LESS.</blockquote>
            </div>
          </v-card-text>
          <v-card-text>
            <div>
              <h3>Zenzio, Tampa, FL - <i>Jr. Web Developer</i></h3>
              <div class="grey--text">Sep 2014 - Feb 2015</div>
              <blockquote>C#, MVC, HTML, CSS. Began career in frontend learning the basics.</blockquote>
            </div>
          </v-card-text>
          <v-card-text>
            <div>
              <h3>University of South Florida, Tampa, FL - <i>Management Information Systems</i></h3>
              <div class="grey--text">Sep 2009 - Sep 2014</div>
              <blockquote>Bachelor of Science</blockquote>
            </div>
          </v-card-text>
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
</style>
