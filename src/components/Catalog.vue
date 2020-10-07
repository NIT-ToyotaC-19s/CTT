<template>
  <div class="catalog">
    <v-app>
    this is catalog.
    <v-card elevation="7" class="questions">
      問題１．DNNに触れてみよう
      <br>
      難易度★★☆
      <br>
      <router-link :to="{name: 'Question', query: {id: 1}}">Work on</router-link>
    </v-card>
    <v-card elevation="7">
      問題２．COCOAについて知ろう
      <br>
      <router-link :to="{name: 'Question', query: {id: 2}}">この問題に取り組む！</router-link>
    </v-card>
    <v-card elevation="7">
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
questions {
  color: red;
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
