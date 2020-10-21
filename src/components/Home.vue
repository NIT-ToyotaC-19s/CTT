<template>
  <div class="home">
    <!-- Welcome to Capture The Toyota.
    <br>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
    this is home.
 -->

  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >

        <h1 class="display-1 font-weight-thin mb-4" id="title">
          2I学科展
        </h1>
        <!-- <img src="../assets/NITTC_logo.png"> -->
        <h3 class="subheading">
          Welcome to Capture The Toyota.
          <!-- <br>
          <router-link to="/catalog" style="text-decoration:none;"><h3 id="mondaihe">問題一覧へ</h3></router-link>
          <router-view /> -->
          <!-- <router-link to="/">home</router-link>,
          <router-link to="/catalog">catalog</router-link>,
          <router-link to="/question">question</router-link>, -->
          <!-- <router-link to="/q">q</router-link>, -->
        </h3>
      </v-col>
    </v-row>
  </v-parallax>

  <div id='intro'>
  <br>
  <p>情報工学科2年へようこそ！</p>
  <br>
  <p>ここではCTTというクイズラリーができます</p>
  <br>
  <p>クイズには一般向け問題と情報向け問題の2種類があります</p>
  <br>
  <p>正答数に応じて景品をさしあげます</p>
  <br>
<router-link to="/catalog" style="text-decoration:none;"><h3 id="mondaihe">問題一覧へ</h3></router-link>
<router-view />
<br>
</div>
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
div {
  text-align: center;
}
#intro {
  /* background-color: lightgreen; */
}
#title {
  margin-top: 125px;
}
#mondaihe {
  color: skyblue;
}
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
