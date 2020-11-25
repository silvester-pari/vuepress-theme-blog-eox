<template>
  <v-app-bar
    app
    fixed
    elevate-on-scroll
  >
    <v-container class="d-flex align-space-between">
      <ul class="d-flex flex-wrap mr-auto my-4 my-sm-0">
        <li v-for="(link, index) in links" :key="index" class="d-flex justify-center mx-0">
          <router-link v-if="link.path" :to="link.path">{{ link.label }}</router-link>
          <a v-else-if="link.url" :href="link.url" target="link.target">{{ link.label }}</a>
        </li>
      </ul>
      <v-toolbar-title
        class="mr-auto d-flex align-center"
        style="cursor:pointer"
        @click="navigate('/')"
      >
        <div v-html="$themeConfig.titleHtml" class="site-title" />
      </v-toolbar-title>
      <v-btn
        class="d-block d-md-none"
        icon
        @click="toggleSidebar"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {
    created() {
      this.links = this.$themeConfig.header.links
    },
    methods: {
      toggleSidebar() {
        this.$emit('toggleSidebar')
      }
    },
    data: () => ({
      links: {},
    }),
  }
</script>