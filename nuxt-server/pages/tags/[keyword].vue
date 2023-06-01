<template>
  <div>
    <List :posts="data.articles" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const keyword = ref(route.params.keyword)
const data = await newsTag(config.public['newsKey'], keyword.value)
</script>
