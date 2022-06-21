<template>
  <h1>Welcome to Flashcards</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="flashcard in flashcards" :key="flashcard.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{flashcard.question}}</h5>
          <p class="card-text">{{flashcard.options}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'flashcards',
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
