<template>
  <div>
    <List :posts="data.articles" />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const data = await newsTop(config.public['newsKey'])
</script>
