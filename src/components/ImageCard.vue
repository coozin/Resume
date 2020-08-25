<template>
  <v-card v-if="image">
    <div>
      <iframe
        :src='image.embed_url'
        frameborder='0'
        width="300"
        height="200">
      </iframe>
    </div>
    <v-card-title primary-title>
      <div>
        <div class="headline mb-0 wrap">{{image.title}}</div>
        <div>{{image._score}} internet points<br>
        Source: {{image.source_tld ? image.source_tld: 'no source'}}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'imageCard',
  props: {
    image: Object,
  },
}
</script>
