<template>
  <div class="home">
    <HelloWorld msg=""/>
    <img src="https://t1.kakaocdn.net/friends/prod/brand/202106_jordy_type1_thumb_pc.jpg" alt="greeny" />
  </div>
    <header>
      <h1 style="color:#BFC9CA">BRIGHTIDEAS</h1>
    </header>
  <body>
  <h4>Topics</h4>
  <p>Brightideas the perfect student app to optimize your studying experience by repeating complex concepts with the help of flashcards</p>
  <p>Start to create your own set of flashcards or use one of our many already created sets.</p>
  <p>Create Custom Flashcards-Brightideas </p>
  <p>Why this learning technique? Spaced Repetition is an already known evidence-based learning technique. It has been proven to increase the rate of learning by always repeating same concepts.  </p>
  </body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style lang="css">
</style>
