<template>
  <h1>Welcome to Flashcards</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="flashcard in flashcards" :key="flashcard.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Hallo</h5>
          <p class="card-text">zurück</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashcardItem',
  data () {
    return {
      flashcards: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://webtech-brightideas.herokuapp.com/api/v1/flashcards', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(thing => {
        this.flashcards.push(thing)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
