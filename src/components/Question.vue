<template>
  <div class="question">
    <v-app>
    Question No. {{ this.$route.query.id }}
    <br>
    <!-- {{ question_data[this.$route.query.id] }} -->
    <div v-for="q in question_data[this.$route.query.id].choose" :key="q">
      <v-btn color="white" block class="black--text">{{ q }}</v-btn>
    </div>
    問題一覧へ
    <router-link to="/catalog">catalog</router-link>
    <router-view />
    <v-btn @click="Post_Question()">送信</v-btn>
    {{ isCorrect }}
  </v-app>
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
    question_data:
    {1: {"choose": ["太田 稔彦(おおた としひこ)", "豊田　章男(とよた　あきお)", "田川　智彦(たがわ ともひこ)", "河野　太郎(こうの　たろう)"], "ans_number": 3},
     2: {"choose": ["準学士", "学士", "修士", "博士"], "ans_number": 1},
     3: {"choose": ["3", "4", "5", "6"], "ans_number": 3},
     4: {"choose": ["５年", "１０年", "１２年", "１５年"], "ans_number": 2},
     5: {"choose": ["1963年", "1987年", "1994年", "2005年"], "ans_number": 2},
     6: {"choose": ["6", "7", "8", "9"], "ans_number": 3},
     7: {"choose": ["豊橋技術科学大学", "東京大学", "名古屋大学", "豊田工業大学"], "ans_number": 3},
     8: {"choose": ["1.1.1.1", "1.0.0.1", "1.1.0.0", "0.0.0.0"], "ans_number": 2},
     9: {"choose": ["nittc{famima}", "nittc{karagekun}", "kosen{famima}", "kosen{karagekun}"], "ans_number": 2},
     10: {"choose": ["豊田工業高等専門学校", "豊田市駅", "麦笑らーめん", "Felna"], "ans_number": 1},
     11: {"choose": ["3", "6", "9", "12"], "ans_number": 2},
     12: {"choose": ["こうせんはいいぞ", "こうせんだいすき", "とよたしさいこう", "がりょうてんせい"], "ans_number": 1},
     13: {"choose": ["かめら", "とよた", "ゆうき", "まうす"], "ans_number": 4},
     14: {"choose": ["2", "4", "6", "8"], "ans_number": 4},
   }
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
