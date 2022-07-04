<template>
      <form class="text-start">
        <div class="row">
          <div class="col">
            <label for="title" class="form-label">title</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
          </div>
          <div class="col">
            <label for="description" class="form-label">description</label>
            <input type="text" class="form-control" id="description" v-model="description" required>
          </div>
          <div class="col">
            <label class="form-label">subject</label>
            <select class="form-select" aria-label="Default select example" v-model="subject" required>
              <option selected>Choose Subject</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Art">Art</option>
              <option value="German">German</option>
              <option value="English">English</option>
              <option value="Chemistry">Chemistry</option>
              <option value="ComputerScience">ComputerScience</option>
              <option value="Physics">Physics</option>
              <option value="Economics">Economics</option>
              <option value="SocialStudies">SocialStudies</option>
              <option value="ForeignL">ForeignLanguages</option>
              <option value="Geography">Geography</option>
            </select>
          </div>
          <img src="https://t1.kakaocdn.net/friends/prod/brand/202108_type1_thumb_pc.jpg" class="img-fluid" alt="img1">
          <submit type="submit" class="btn btn-outline-success" @click="createSet">Create Set</submit>
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
input[type=text]:focus {
  border: 3px solid #FFD700;
  font-family: monospace;
}
select {
  width: 100%;
  height: 40%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #FFD700;
}
label{
  font-family: monospace;
  background-color: #FFD700;
  border-radius: 4px;
  font-weight: bold;
}
</style>
