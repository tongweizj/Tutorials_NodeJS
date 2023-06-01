<template>
  <List :posts="data.articles" />
</template>

<script setup>
const route = useRoute()
const keyword = ref(route.params.keyword)
const config = useRuntimeConfig()
const apiUrl = 'https://newsapi.org/v2/everything?sortBy=relevancy&language=zh&q=' + keyword.value + '&apiKey=' + config.news
let { data: data } = await useFetch(apiUrl)
</script>
