<template>
  <div class="container-fluid">
    <input type ="text" v-model="search" placeholder ="Search for Sets..."/>
    <set-list :sets="this.filteredSets" ></set-list>
  </div>
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
      sets: [],
      search: ''
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
  },
  computed: {
    filteredSets: function () {
      return this.sets.filter((set) => {
        return set.title.match(this.search)
      })
    }
  }
}

</script>

<style scoped>
input[type=text] {
  transition: width 0.4s ease-in-out;
  background-position: 10px 10px;
}

input[type=text]:focus {
  width: 100%;
}
</style>
