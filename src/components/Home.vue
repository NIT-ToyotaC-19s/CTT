<template>
  <div class="home">
    Welcome to Capture The Toyota.
    <br>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
    <!-- <router-link to="/">home</router-link>,
    <router-link to="/catalog">catalog</router-link>,
    <router-link to="/question">question</router-link>, -->
    <!-- <router-link to="/q">q</router-link>, -->
    this is home.
  </div>
</template>

<script>
export default {
  name: 'Home',
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
