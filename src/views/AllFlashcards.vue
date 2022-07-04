<template>
  <h1>Flashcards Overview</h1>
  <p>Don‘t stress out!
    Just practice a lot and you will be ready for your next exam. These small steps will feel like a success and you will be happy to keep going.
  </p>
  <input type ="text" v-model="search" placeholder ="search flashcards with Set ID"/>
  <body>
  <div class="container-fluid">
    <flashcard-list :flashcards="this.filteredFlashcards" ></flashcard-list>
  </div>
  </body>
</template>

<script>
import FlashcardList from '@/components/FlashcardList'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'flashcards',
  components: {
    FlashcardList
  },
  data () {
    return {
      flashcards: [],
      search: ''
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/flashcards'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(flashcard => {
        this.flashcards.push(flashcard)
      }))
      .catch(error => console.log('error', error))
  },
  computed: {
    filteredFlashcards: function () {
      return this.flashcards.filter((flashcard) => {
        return flashcard.question.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
h1{
  font-family: monospace;
}
p{
  font-family: monospace;
}
</style>
