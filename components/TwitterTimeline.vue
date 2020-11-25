<template>
  <Timeline :id="twitterId"
  sourceType="profile" :options="{ tweetLimit: '3' }"/>
</template>

<script>
import Timeline from 'vue-tweet-embed/timeline'

export default {
  created() {
    this.twitterId = this.$themeConfig.seo.twitterSite
  },
  data: () => ({
    twitterId: null,
  }),
}
</script>