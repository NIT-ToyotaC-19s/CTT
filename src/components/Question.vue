<template>
  <div class="question">
    Question No. {{ this.$route.query.id }}
    
    <br>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
    <button type="button" @click="Post_Question()">送信</button>
    {{ isCorrect }}
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    msg: String
  },
  data() {
    return{
      // csrfToken: Cookies.get('csrftoken'),
      // requestHeader: {
      // headers: {
            // 'Content-Type': 'application/json;charset=UTF-8',
            // 'Access-Control-Allow-Origin': '*',
      //   }
      // },
    user_answer: 'hoge',
    jadge: false,
    isCorrect: false,
    question: this.$route.query.id,
  };
},
  methods: {
    Post_Question() {
      // this.$axios.post('http://localhost:8080/',
      // this.$axios.post('https://plated-campaign-291611.df.r.appspot.com/',
      this.$axios.post('/api',
      // {question: this.question, user_answer: this.user_answer}, this.requestHeader)
      {question: this.question, user_answer: this.user_answer})
          .then((response) => {
            console.log(response);
            console.log(response.data);
            alert(response + '答えを送信しました');
            this.jadge = true;
            this.isCorrect = response.data["isCorrect"];
          })
          .catch((e) => {
            alert(e);
          })
    }
  },
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
