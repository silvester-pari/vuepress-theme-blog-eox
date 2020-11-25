<template>
  <BaseLayout>
    <template #content>
      <div>TEAMPAGE</div>
      <div>{{$pagination}}</div>
      <div>{{$page}}</div>
    </template>
    <template #sticky>
      <Sticky />
    </template>
  </BaseLayout>
</template>