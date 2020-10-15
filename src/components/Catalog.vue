<template>
  <div class="catalog">
    <v-app>
      <p class="title-border">General</p>
    <router-link :to="{name: 'Question', query: {id: 0}}" style="text-decoration:none;">
    <v-card elevation="7" class="questions">
      <img src="../assets/NITTC_logo.png">
      問題０．DNSに触れてみよう
      <br>
      : 難易度★★☆
      <br>

      <!-- <v-row
    align="center"
    justify="space-around"
  > -->
  <!-- <router-link :to="{name: 'Question', query: {id: 0}}" style="text-decoration:none;"> -->
    <!-- <v-btn text class="workon">
      Work on!
    </v-btn> -->
  <!-- </router-link> -->
  <!-- </v-row> -->
      <!-- <router-link :to="{name: 'Question', query: {id: 1}}">Work on</router-link> -->
    </v-card>
  </router-link>
    <v-card elevation="7" class="questions">
      問題２．COCOAについて知ろう
      <br>
      <router-link :to="{name: 'Question', query: {id: 2}}">この問題に取り組む！</router-link>
    </v-card>
    <v-card elevation="7" class="questions">
      問題３．蟻蟻蟻
      <br>
      <router-link :to="{name: 'Question', query: {id: 3}}">この問題に取り組む！</router-link>
    </v-card>
    <!-- <router-link :to="{name: 'Question', query: {id: 1}}">question_1</router-link>,
    <router-link :to="{name: 'Question', query: {id: 2}}">question_2</router-link>,
    <router-link :to="{name: 'Question', query: {id: 3}}">question_3</router-link>, -->
    <router-view />

    <!-- <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <div>Word of the Day</div>
        <p class="display-1 text--primary">
          be•nev•o•lent
        </p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          <router-link :to="{name: 'Question', query: {id: 1}}">この問題に取り組む！</router-link>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <div>Word of the Day</div>
        <p class="display-1 text--primary">
          be•nev•o•lent
        </p>
        <p>adjective</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card> -->

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
