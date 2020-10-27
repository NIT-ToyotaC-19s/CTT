<template>
  <div class="catalog">
    <v-app>
      <p class="title-border">General</p>
  <router-link :to="{name: 'Question', query: {id: 1}}" style="text-decoration:none;">
    <v-card elevation="7" class="questions">
      <img src="../assets/toshokan.jpg">
      問題1．図書館
      <br>
      : 難易度★☆☆
      <br>
    </v-card>
  </router-link>
      <router-link :to="{name: 'Question', query: {id: 2}}" style="text-decoration:none;">
      <v-card elevation="7" class="questions">
        <img src="../assets/taikukan.jpg">
        問題2．第2体育館
        <br>
        : 難易度★★☆
        <br>
      </v-card>
    </router-link>
    <router-link :to="{name: 'Question', query: {id: 3}}" style="text-decoration:none;">
    <v-card elevation="7" class="questions">
      <img src="../assets/joho-kobokan.jpg">
      問題3．情報棟ー創造工房棟間
      <br>
      : 難易度★☆☆
      <br>
    </v-card>
  </router-link>
  <router-link :to="{name: 'Question', query: {id: 4}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/kankyokamae.jpg">
    問題4．環境都市工学科前
    <br>
    : 難易度★☆☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 5}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/johokogakuka.jpg">
  問題5．情報工学科
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 6}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/kikaikogakuka.jpg">
  問題6．機械工学科
  <br>
  : 難易度★☆☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 7}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/ict-center.jpg">
  問題7．ICT教育センター
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>

<p class="title-border">Academic</p>
<router-link :to="{name: 'Question', query: {id: 8}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/johokogakuka.jpg">
    問題8．情報工学科
    <br>
    : 難易度★★☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 9}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/kankyokamae.jpg">
  問題9．環境都市工学科前
  <br>
  : 難易度★★★
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 10}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/kikaikogakuka.jpg">
問題10．機械工学科
<br>
: 難易度★★★
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 11}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/senkoka.jpg">
問題11．専攻科
<br>
: 難易度★★☆
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 12}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/joho-kobokan.jpg">
問題12．情報棟ー創造工房棟間
<br>
: 難易度★★★
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 13}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/toshokan.jpg">
  問題13．図書館
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 14}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/ict-center.jpg">
    問題14．ICT教育センター
    <br>
    : 難易度★★☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 15}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/senkoka.jpg">
  問題15．専攻科
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 16}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/taikukan.jpg">
問題16．第2体育館
<br>
: 難易度★☆☆
<br>
</v-card>
</router-link>
    <router-view />
  </v-app>
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
.questions {
  /* color: red; */
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 18px;
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
.workon {
  color: red;
  margin-left: 65%;
}

.title-border {
display: flex;
align-items: center;
margin-top: 20px;
font-size: 30px;
}
.title-border:before,
.title-border:after {
border-top: 1px solid;
content: "";
flex-grow: 1;
}
.title-border:before {
margin-right: 1rem;
}
.title-border:after {
margin-left: 1rem;
}
.catalog {
  margin-left: 5%;
  margin-right: 5%;
}
img {
  width: 70px;
  height: 70px;
  float: left;
  margin-right: 10px;
}
</style>
