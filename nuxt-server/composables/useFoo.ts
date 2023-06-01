export const useFoo = async (newsKey: String) => {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${newsKey}`
  console.log('apiUrl:',apiUrl)

  let { data: data } = await useFetch(apiUrl)
  console.log('data:',data.value.articles)
  return data.value
}