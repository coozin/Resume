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
      time: moment().format('LLL')
    }
  },
  mounted () {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime: function () {
      const currentTime = moment().format('LLL');
      this.time = currentTime;
    }
  }
}
</script>