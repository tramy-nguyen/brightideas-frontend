<template>
      <form class="text-start">
        <div class="row">
          <div class="col, text-bg-dark p-3">
            <label for="title" class="form-label">title</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="col, text-bg-dark p-3">
            <label for="description" class="form-label">description</label>
            <input type="text" class="form-control" id="description" v-model="description" required>
          </div>
          <div class="col, text-bg-dark p-3">
            <label class="form-label">subject</label>
            <select class="form-select" aria-label="Default select example" v-model="subject" required>
              <option selected>Choose Subject</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Art">Art</option>
            </select>
          </div>
          <submit type="submit" class="btn btn-outline-success" @click="createSet">Create Set</submit>
          <button type="button" class="btn btn-outline-danger">Reset Set</button>
        </div>
      </form>
</template>

<script>
export default {
  name: 'SetCreateForm',
  data () {
    return {
      title: '',
      description: '',
      subject: ''
    }
  },
  methods: {
    createSet () {
      console.log(this.title)
      console.log(this.description)
      console.log(this.subject)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/sets'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        title: this.title,
        description: this.description,
        subject: this.subject
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

</style>
