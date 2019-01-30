<template>
  <v-flex>
    <v-card class="mb-2 mt-2 ml-2 mr-2">
      <v-img
        :src="track['img']"
        height="200px"
        width="200px"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{track['uNm']}}</h3>
          <div>{{track['name']}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Listen</v-btn>
      </v-card-actions>
      <div>Short Link: {{track['eId']}}</div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'trackCard',
  props: {
    track: Object,
  }
}
</script>
