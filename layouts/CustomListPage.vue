<template>
  <BaseLayout>
    <template #content>
      <component :is="customListContent" />
    </template>
    <template #sticky>
      <Sticky />
    </template>
  </BaseLayout>
</template>

<script>
  import Vue from 'vue'

  export default {
    created() {
      this.customListContent = Vue.component(this.$themeConfig.components.customList)
    },
    data: () => ({
      customListContent: null,
    }),
  }
</script>