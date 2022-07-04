<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#flashcards-create-offcanvas" aria-controls="#flashcards-create-offcanvas">Create Flashcard
  <i class="bi bi-flashcard-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="flashcards-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Flashcard</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
        <div class="row">
          <div class="col, text-bg-light p-3">
            <label for="question" class="form-label">question</label>
            <input type="text" class="form-control" id="question" v-model="question" required>
          </div>
          <div class="col, text-bg-light p-3">
            <label for="answer" class="form-label">answer</label>
            <input type="text" class="form-control" id="answer" v-model="answer" required>
          </div>
          <div class="col, text-bg-light p-3">
            <label for="category" class="form-label">category</label>
            <input type="text" class="form-control" id="category" v-model="category" required>
          </div>
          <div class="col, text-bg-light p-3">
            <label for="setId" class="form-label">setID</label>
            <input type="Long" class="form-control" id="setID" v-model="setId" required>
          </div>
        </div>
      </form>
      <submit type="submit" class="btn btn-outline-success" @click="createFlashcard">Create a Flashcard</submit>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashcardCreateForm',
  data () {
    return {
      question: '',
      answer: '',
      category: '',
      setId: ''
    }
  },
  methods: {
    createFlashcard () {
      console.log(this.question)
      console.log(this.answer)
      console.log(this.category)
      console.log(this.setId)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/flashcards'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        question: this.question,
        answer: this.answer,
        category: this.category,
        setId: this.setId
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px
}
h5{
  font-family: monospace;
  font-weight: bold;
}
input[type=text] {
  transition: width 0.4s ease-in-out;
  background-position: 10px 10px;
  font-family: monospace;
}

input[type=text]:focus {
  width: 100%;
}
label{
  font-family: monospace;
}
</style>
