<template>
  <div>
    <section class="mt-1 flex">
      <div class="relative mx-auto w-full">
        <section class="mt-1">
          <a v-for="(article, index) in articles" :key="index"
            class="inline-flex w-full items-baseline rounded py-4 visited:text-slate-400 hover:bg-slate-100"
            :href="article.url" target="_blank" rel="noreferrer noopener"><span
              class="mr-2 flex w-6 flex-none justify-end text-xs text-slate-400 dark:text-gray-500">{{ index + 1
              }}.</span>
            <div class="pr-2">
              <span class="block">{{ article.title }}</span>
              <span class="text-sm text-gray-400 block">{{ article.description }}</span>
            </div>
          </a>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['keyword'],
  data() {
    console.log('keyword:', this.keyword)
    return {
      news: [],
      apiUrl: '',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: '',
      articles: [],
      country: 'ca',
      apiKey: '193987c7020b430db6f3deb45b2f55a4',
    }
  },
  created() {
    this.fetchTopNews()
  },
  mounted() {
    // this.load()
  },
  methods: {
    // async load() {
    //   // this.news = await APIGetList(this.keyword.replace('_', ' '))
    //   this.news = await newsApiList(this.keyword.replace('_', ' '))
    //   console.log('news.length:', this.news)
    // },
    gotoArticle(article) {
      // console.log(article);
      navigateTo(`/article?id=${article.id}`)
    },
    getImgUrl(article) {
      return `${article.image}`
    },
    resetData() {
      this.currentPage = 1
      this.articles = []
    },
    fetchTopNews() {
      this.apiUrl =
        'https://newsapi.org/v2/top-headlines?country=' + this.country + '&pageSize=' + this.maxPerPage + '&apiKey=' + this.apiKey
      console.log('url:', this.apiUrl)
      this.isBusy = true
      this.searchword = ''

      this.resetData()
      this.fetchData()
    },
    fetchData() {
      let req = new Request(this.apiUrl + '&page=' + this.currentPage)
      fetch(req)
        .then((resp) => resp.json())
        .then((data) => {
          this.totalResults = data.totalResults
          data.articles.forEach((element) => {
            this.articles.push(element)
          })
          console.log(this.articles)
          this.isBusy = false
          this.showloader = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
</script>

<style scoped></style>
