<template>
  <body>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="flashcard in flashcards" :key="flashcard.id">
      <div class="flip-card">
        <div class="flip-card-inner">
          <h5 class="flip-card-front">{{flashcard.question}}</h5>
          <p class="flip-card-back">{{flashcard.answer}}</p>
        </div>
      </div>
    </div>
  </div>
  </body>
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
  background: linear-gradient(#f8da61, #ff5acd) ;
  color: black;
  font-family: monospace;
  font-size: 25px;
  border-radius: 10px;
  justify-content: center;
}

.flip-card-back {
  background: linear-gradient(#08aeea, #2af598);
  color: black;
  transform: rotateY(180deg);
  text-align: center;
  font-family: monospace;
  font-size: 25px;
  border-radius: 10px;
  justify-content: center;
}

</style>
