<template>
  <h1>Welcome to Create-a-Flashcard!</h1>
  <h3 style="color:#A9A9A9">Start to create your own set of flashcards. With each flashcard you will learn another small piece of the big picture that will bring you closer to your goal. So what are you waiting for?</h3>
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
h1{
  font-family: monospace;
}
h3{
  font-family: monospace;
  font-weight: lighter;

}
</style>
