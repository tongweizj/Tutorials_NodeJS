<template>
  <div class="mb-8 border-b border-dotted border-gray-300 pb-8">
    <List :posts="data.articles" />
  </div>
</template>

<script setup>
import { } from 'vue'
const config = useRuntimeConfig()
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=' + config.news //193987c7020b430db6f3deb45b2f55a4'
let { data: data } = await useFetch(apiUrl)
</script>

<style scoped></style>
