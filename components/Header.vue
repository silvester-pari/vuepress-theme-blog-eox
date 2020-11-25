<template>
  <v-app-bar
    app
    fixed
    elevate-on-scroll
  >
    <v-container class="d-flex justify-space-between fill-height">
      <ul class="d-md-flex flex-wrap my-4 my-sm-0 hidden-md-and-down">
        <li v-for="(link, index) in links" :key="index" class="d-flex justify-center mr-3">
          <router-link v-if="link.path" :to="link.path">{{ link.label }}</router-link>
          <a v-else-if="link.url" :href="link.url" target="link.target">{{ link.label }}</a>
        </li>
      </ul>
      <v-toolbar-title
        class="d-flex align-center fill-height"
        style="cursor:pointer"
        @click="$router.push('/').catch(err => {})"
      >
        <div v-html="$themeConfig.titleHtml" class="site-title fill-height" />
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

<style lang="scss" scoped>
  @import '../styles/index';

  .site-title {
    color: $color-app-bar-title;
    i {
      color: $color-app-bar-title !important;
    }
  }
  ul {
    list-style: none;
    padding-left: 0 !important;

    li {
      a {
        @include unstyled-link;
        color: $color-brand !important;
        text-decoration: none !important;
        &:hover {
          text-decoration: underline !important;
        }
      }

      &:not(:last-of-type) {
        margin-right: 1em;
      }
    }
  }
</style>