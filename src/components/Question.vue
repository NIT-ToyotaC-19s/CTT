<template>
  <div class="question">
    <v-app>
      <br>
    <p align=center class="title">Question No. {{ this.$route.query.id }}</p>
    <!-- {{ question_data[this.$route.query.id] }} -->
    <p class="title-border">Choose</p>
    <div v-for="(q, index) in question_data[this.$route.query.id].choose" :key="q">
      <v-btn color="white" block class="black--text" @click="Save_Answer(index+1)"><span class="mgr-10">{{ index+1 }}.</span> {{ q }}</v-btn>
    </div>
    <br>
    <p align=center>あなたの選択肢：{{ user_answer }}</p>
    <v-btn @click="Post_Question()" :disabled="jadge">送信(一度しかできません)</v-btn>
    {{ isCorrect }}
    <br>

    <p v-if="loading" align=center>Now Jadging...</p>
    <vue-loading
      type="spiningDubbles"
      color="#aaa"
      :size="{ width: '100px', height: '100px' }"
      v-if="loading"
      >
    </vue-loading>

    <v-card elevation="6" v-if="jadge" v-show="!loading">
    <span v-if="isCorrect">
      <p align=center class="result">正解</p>
      <p>すごい</p>
    </span>
    <span v-else>
      <p align=center class="result">不正解</p>
      <p>残念！</p>
    </span>
    </v-card>
    <br>
    <!-- <router-link to="/catalog" style="text-decoration:none;" class="ichiranhe"><v-btn class=goto-catalog @click="GoTo_Catalog">問題一覧へ</v-btn></router-link> -->
    <v-btn class=goto-catalog @click="GoTo_Catalog">問題一覧へ</v-btn>
    <router-view />

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
    user_answer: "選択されていません",
    jadge: false,
    // jadge: this.$localStorage.get('jadge')[this.$route.query.id + 1],
    loading: false,
    // btn_class: 'btn-active',
    isCorrect: false,
    // isCorrect: this.$localStorage.get('isCorrect')[this.$route.query.id + 1],
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
            // alert(response + '答えを送信しました');
            // this.jadge = true;
            this.$localStorage.set('jadge'[this.$route.query.id - 1], true);
            console.log(this.$localStorage.get('jadge'));
            this.btn_class = 'btn-imactive';
            this.isCorrect = response.data["isCorrect"];
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
              },
              3000
            );

            // this.loading = false;
          })
          .catch((e) => {
            alert(e);
          })
    },

    Save_Answer(num) {
      this.user_answer = num;
    },
    GoTo_Catalog() {
      this.$router.push('/catalog');
      // console.log(this.$localStorage.get('jadge')[5]);
    },
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
.title {
  font-size: 30px;
}
.goto-catalog {
  color: black;
}
.mgr-10 {
  margin-right: 25px;
}
.result {
  font-size: 30px;
  background: linear-gradient(transparent 60%, yellow 50%);
}
</style>
