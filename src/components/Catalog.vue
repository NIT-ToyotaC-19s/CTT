<template>
  <div class="catalog">
    <v-app>
      <p class="title-border">General</p>
    <router-link :to="{name: 'Question', query: {id: 1}}" style="text-decoration:none;">
    <v-card elevation="7" class="questions">
      <img src="../assets/NITTC_logo.png">
      問題1．場所の名前
      <br>
      : 難易度★☆☆
      <br>
    </v-card>
  </router-link>
      <router-link :to="{name: 'Question', query: {id: 2}}" style="text-decoration:none;">
      <v-card elevation="7" class="questions">
        <img src="../assets/NITTC_logo.png">
        問題2．場所の名前
        <br>
        : 難易度★★☆
        <br>
      </v-card>
    </router-link>
    <router-link :to="{name: 'Question', query: {id: 3}}" style="text-decoration:none;">
    <v-card elevation="7" class="questions">
      <img src="../assets/NITTC_logo.png">
      問題3．場所の名前
      <br>
      : 難易度★☆☆
      <br>
    </v-card>
  </router-link>
  <router-link :to="{name: 'Question', query: {id: 4}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/NITTC_logo.png">
    問題4．場所の名前
    <br>
    : 難易度★☆☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 5}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題5．場所の名前
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 6}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題6．場所の名前
  <br>
  : 難易度★☆☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 7}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題7．場所の名前
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>

<p class="title-border">Academic</p>
  <router-link :to="{name: 'Question', query: {id: 8}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/NITTC_logo.png">
    問題8．場所の名前
    <br>
    : 難易度★★☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 9}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題9．場所の名前
  <br>
  : 難易度★★★
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 10}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/NITTC_logo.png">
問題10．場所の名前
<br>
: 難易度★★★
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 11}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/NITTC_logo.png">
問題11．場所の名前
<br>
: 難易度★★☆
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 12}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/NITTC_logo.png">
問題12．場所の名前
<br>
: 難易度★★★
<br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 13}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題13．場所の名前
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
  <router-link :to="{name: 'Question', query: {id: 14}}" style="text-decoration:none;">
  <v-card elevation="7" class="questions">
    <img src="../assets/NITTC_logo.png">
    問題14．場所の名前
    <br>
    : 難易度★★☆
    <br>
  </v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 15}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
  <img src="../assets/NITTC_logo.png">
  問題15．場所の名前
  <br>
  : 難易度★★☆
  <br>
</v-card>
</router-link>
<router-link :to="{name: 'Question', query: {id: 16}}" style="text-decoration:none;">
<v-card elevation="7" class="questions">
<img src="../assets/NITTC_logo.png">
問題16．場所の名前
<br>
: 難易度★☆☆
<br>
</v-card>
</router-link>
    <!-- </v-card> -->
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
