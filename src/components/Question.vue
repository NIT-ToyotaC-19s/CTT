<template>
  <div class="question">
    this is question.
    Question No. {{ this.$route.query.id }}
    <br>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Question',
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
