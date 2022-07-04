<template>
  <div class="container-fluid">
    <set-list :sets="this.sets" ></set-list>
  </div>
  <img src="https://t1.kakaocdn.net/friends/prod/brand/202108_type1_thumb_pc.jpg" class="img-fluid" alt="img1">
</template>

<script>
import SetList from '@/components/SetList'

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: 'sets',
  components: {
    SetList
  },
  data () {
    return {
      sets: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/sets'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(set => {
        this.sets.push(set)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
