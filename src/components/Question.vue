<template>
  <div class="question">
    this is question.
    Question No. {{ this.$route.query.id }}
    <br>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
    <button type="button" @click="Post_Question()">送信</button>
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
    jadge: 0,
    question: this.$route.query.id,
  };
},
  methods: {
    Post_Question() {
      // this.$axios.post('http://localhost:8080/',
      // this.$axios.post('https://plated-campaign-291611.df.r.appspot.com/',
      this.$axios.post('/',
      // {question: this.question, user_answer: this.user_answer}, this.requestHeader)
      {question: this.question, user_answer: this.user_answer})
          .then((response) => {
            alert(response + 'アバター情報を登録しました');
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
