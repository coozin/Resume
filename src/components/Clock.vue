<template>
  <v-layout>
    {{time}}
  </v-layout>
</template>

<script>
import moment from 'moment';
export default {
  name: 'clock',
  data() {
    return {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  mounted () {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime: function () {
      const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.time = currentTime;
    }
  }
}
</script>