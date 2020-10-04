<template>
  <div class="catalog">
    this is catalog.
    <router-link :to="{name: 'Question', query: {id: 1}}">question_1</router-link>,
    <router-link :to="{name: 'Question', query: {id: 2}}">question_2</router-link>,
    <router-link :to="{name: 'Question', query: {id: 3}}">question_3</router-link>,
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
