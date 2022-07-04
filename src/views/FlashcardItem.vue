<template>
  <h1>Welcome to create a Flashcard</h1>
  <body>
  <flashcard-create-form></flashcard-create-form>
  <set-create-form></set-create-form>
  </body>
</template>

<script>
import FlashcardCreateForm from '@/components/FlashcardCreateForm'
import SetCreateForm from '@/components/SetCreateForm'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'flashcards',
  components: {
    FlashcardCreateForm,
    SetCreateForm
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

</style>
