<template>
  <h1>Welcome to Flashcards</h1>
  <div class="container-fluid">
    <flashcard-list :flashcards="this.flashcards" ></flashcard-list>
  </div>
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
      flashcards: []
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
  }
}
</script>

<style scoped>
font-family: monospace

</style>
