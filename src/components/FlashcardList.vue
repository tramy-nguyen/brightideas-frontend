<template>
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
  name: 'FlashcardList',
  props: {
    flashcards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
