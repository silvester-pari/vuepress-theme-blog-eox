<template>
  <div>
    <div class="breadcrumb">
      <router-link v-if="$cpt.indexPage" v-bind:to="$cpt.indexPage.path">
        < {{ $cpt.indexPage.label }}
      </router-link>
    </div>

    <h1>{{ $page.title }}</h1>

    <div v-if="$cpt.terms">
      <router-link v-for="item of $cpt.terms.list" v-bind:to="item.path">
        <div v-text="item.name" />
        <div v-text="item.posts.length" />
      </router-link>
    </div>
  </div>
</template>