<template>
  <body>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="flashcard in flashcards" :key="flashcard.id">
      <flashCard :flashcard="flashcard"></flashCard>
    </div>
  </div>
  </body>
</template>

<script>

import FlashCard from '@/components/FlashCard'
export default {
  name: 'FlashcardList',
  components: {
    FlashCard
  },
  props: {
    flashcards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background: linear-gradient(#f8da61, #90EE90) ;
  color: black;
  font-family: monospace;
  font-size: 25px;
  border-radius: 10px;
  justify-content: center;
}

.flip-card-back {
  background: linear-gradient(#08aeea, #90EE90);
  color: black;
  transform: rotateY(180deg);
  text-align: center;
  font-family: monospace;
  font-size: 25px;
  border-radius: 10px;
  justify-content: center;
}
.card{
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
}
</style>
