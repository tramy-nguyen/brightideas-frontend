<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="set in sets" :key="set.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{set.title}}</h5>
          <p class="card-text">{{set.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SetList',
  props: {
    sets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
