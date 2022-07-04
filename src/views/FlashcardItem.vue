<template>
  <h1>Welcome to Flashcards</h1>
        <div class="container-fluid">
          <flashcard-list :flashcards="this.flashcards" ></flashcard-list>
        </div>
        <flashcard-create-form></flashcard-create-form>
        <set-create-form></set-create-form>
  <img src="https://t1.kakaocdn.net/friends/prod/brand/202108_type1_thumb_pc.jpg" class="img-fluid" alt="img1">
</template>

<script>
import FlashcardCreateForm from '@/components/FlashcardCreateForm'
import SetCreateForm from '@/components/SetCreateForm'
import FlashcardList from '@/components/FlashcardList'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'flashcards',
  components: {
    FlashcardCreateForm,
    SetCreateForm,
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

</style>
