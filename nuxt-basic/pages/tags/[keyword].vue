<template>
  <h1>{{ data.title }}</h1>
  <div class="">获取的id:{{ id }}</div>

  {{ data.label }}
  {{ data.published }}
  {{ data.url }}
  {{ data.image }}
  source: {{ data.source }}
  <hr />
  {{ data.content }}
</template>

<script setup>
const route = useRoute()
const keyword = ref(route.params.keyword)
console.log('keyword:', keyword.value)
// When accessing /posts/1, route.params.id will be 1
import { } from 'vue'
const res = await useFetch('https://api.goldpanda.net/api/news?action=get-data-info&ID=' + route.params.id, {
  method: 'get',
  id: 1,
})
// fetch

const apiUrl = 'https://newsapi.org/v2/everything?sortBy=relevancy&apiKey=193987c7020b430db6f3deb45b2f55a4&language=zh&q=' + keyword.value
let req = new Request(apiUrl)
console.log('url:', apiUrl)

// fetchData() {

//   fetch(req)
//     .then((resp) => resp.json())
//     .then((data) => {
//       this.totalResults = data.totalResults
//       data.articles.forEach((element) => {
//         this.articles.push(element)
//       })
//       console.log(this.articles)
//       this.isBusy = false
//       this.showloader = false
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// },
console.log(res)
const data = res.data
</script>
