<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <h5 class="flip-card-front">{{flashcard.question}}</h5>
      <p class="flip-card-back">{{flashcard.answer}} {{flashcard.setId}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashCard',
  props: {
    flashcard: {
      type: Object,
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

</style>
