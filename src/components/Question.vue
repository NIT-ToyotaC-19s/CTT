<template>
  <div class="question">
    <v-app>
      <br>
    <p align=center class="title">Question No. {{ this.$route.query.id }}</p>
    <!-- {{ question_data[this.$route.query.id] }} -->
    <p class="title-border">Choose</p>
    <div v-for="(q, index) in question_data[this.$route.query.id].choose" :key="q">
      <v-btn color="white" block class="black--text" @click="Save_Answer(index+1)" :disabled="$localStorage.get('jadge'+id)"><span class="mgr-10">{{ index+1 }}.</span> {{ q }}</v-btn>
      <!-- <v-btn color="white" block class="black--text" @click="Save_Answer(index+1)"><span class="mgr-10">{{ index+1 }}.</span> {{ q }}</v-btn> -->
    </div>
    <br>
    <p align=center>あなたの選択肢：{{ user_answer }}</p>
    <v-btn @click="Post_Question()" :disabled="$localStorage.get('jadge'+id)">送信(一度しかできません)</v-btn>
    <br>

    <p v-if="loading" align=center>Now Jadging...</p>
    <vue-loading
      type="spiningDubbles"
      color="#aaa"
      :size="{ width: '100px', height: '100px' }"
      v-if="loading"
      >
    </vue-loading>

    <v-card elevation="6" v-if="$localStorage.get('jadge'+id)" v-show="!loading" class="comment-card">
    <span v-if="$localStorage.get('isCorrect'+id)" class="comment-card">
      <p align=center class="result">正解</p>
      <p>すごい！</p>
      {{ question_data[this.$route.query.id].comment }}
    </span>
    <span v-else>
      <p align=center class="result">不正解</p>
      <p>残念！</p>
      {{ question_data[this.$route.query.id].comment }}
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
    id: this.$route.query.id,
    user_answer: "選択されていません",
    // jadge: false,
    // jadge: this.$localStorage.get('jadge'+this.id),
    // jadge: this.$localStorage.get('jadge')[this.$route.query.id + 1],
    loading: false,
    // btn_class: 'btn-active',
    // isCorrect: false,
    // isCorrect: this.$localStorage.get('isCorrect'+this.id),
    // isCorrect: this.$localStorage.get('isCorrect')[this.$route.query.id + 1],
    // question: this.$route.query.id,
    question_data:
    {1: {"choose": ["太田 稔彦(おおた としひこ)", "豊田 章男(とよた　あきお)", "田川 智彦(たがわ ともひこ)", "河野 太郎(こうの　たろう)"],
         "comment": "正解は3番の田川 智彦でした！\n太田 稔彦は豊田市長，豊田 章男はトヨタの社長，河野 太郎は政治家で現行革相です．ちなみに田川校長は化学工学者で名古屋大学名誉教授でもあります．"},
     2: {"choose": ["準学士", "学士", "修士", "博士"],
         "comment": "正解は1番の準学士でした！\n準学士は高専特有の学位で短大では短期大学士という名前です．実は準学士は厳密には学位ではなく称号と呼ばれるものなので，日本国内でしか通用しません:("},
     3: {"choose": ["3", "4", "5", "6"],
         "comment": "正解は3番の5でした！\n機械工学科，電気･電子システム工学科，情報工学科，環境都市工学科，建築学科の5つの学科が置かれています．それぞれの学科には特有の雰囲気や特徴があるので，\
         クラス展や学科展で比べてみてください．また専攻科は電子機械工学専攻，建築工学専攻，情報科学専攻の3つがあります．"},
     4: {"choose": ["５年", "１０年", "１２年", "１５年"],
         "comment": "正解は2番の10年でした！\n1学年2回まで在籍できますが，あまり良いことではありません．通常よりかなり長い期間在籍している人(つまり何度も留年している人)は「長老」と呼ばれることがあります．"},
     5: {"choose": ["1963年", "1987年", "1994年", "2005年"],
         "comment": "正解は2番の1987年でした！\n一番新しい学科ですが，なぜか建物がボロいです．情報工学科棟については自動販売機がない，移動が面倒などの苦情が寄せられています．"},
     6: {"choose": ["ある", "ない", "低学年のみある", "専攻科のみある"],
         "comment": "正解は2番のないでした！\n全国で半分くらいの高専は低学年のみ制服がありますが，豊田高専に制服はありません．ただし1年生はGWまで中学の制服で過ごすことになります．\
         GW後からは各々のファッションセンスが露呈します．"},
     7: {"choose": ["6", "7", "8", "9"],
         "comment": "正解は3番の8でした！\n男子寮が5棟、女子寮が1棟、男女高学年寮が1棟あります．さらに今建設中の国際寮(仮)があり，留学生と日本人学生の共同生活のためのシェアハウス型の寮を予定しているそうです．"},
     8: {"choose": ["豊橋技術科学大学", "東京大学", "名古屋大学", "豊田工業大学"],
         "comment": "正解は3番の名古屋大学でした！\nac.jpは日本を意味するJPドメインの種類の一つで、大学などの高等教育機関や学校法人などのためのドメインです．\n\
         また豊田高専では約5割の学生が大学や専攻科に進学します．東京大学や京都大学には数人に1人しか進学していません．毎年，豊橋技術科学大学や名古屋大学などへの進学者が多いです．"},
     9: {"choose": ["1.1.1.1", "1.0.0.1", "1.1.0.0", "0.0.0.0"],
         "comment": "正解は2番の1.0.0.1でした！\n「🐶＝犬＝鳴き声がワン＝ワン＝１」というなぞなぞのような解釈が必要でした．するとこの英文を日本語に直すと「1.1.1.1の代替DNSサーバのipv4は何？」となります．\n\
         この問題は「DNSサーバ」，「ipv4」の二つの専門用語の意味が分からないと解けません．単語の意味さえ分かれば，ググれば簡単に答えが分かる問題です．"},
     10: {"choose": ["google-public-dns-a.google.com", "google-public-dns-b.google.com", "google-public-dns-c.google.com", "google-public-dns-d.google.com"],
         "comment": "正解は1番のgoogle-public-dns-a.google.comでした！\n「bee＝蜂＝８」というなぞなぞ的な解釈が必要でした．また，「*4」があるため４倍にします(=8.8.8.8)．この問題分を日本語にすると「8.8.8.8のFQDNは何？」となります．\n\
         FQDNはFully Qualified Domain Name(完全修飾ドメイン名)の略です．あとは調べれば出てきます．"},
     11: {"choose": ["nittc{famima}", "nittc{karagekun}", "kosen{famima}", "kosen{karagekun}"],
         "comment": "正解は2番のnittc{karagekun}でした！\nkaragekunに特に意味はありません．\n\
         ところで豊田高専の近くにはファミリーマートがあり，特に寮生は買い物や荷物の受け取りなど頻繁に利用しています．"},
     12: {"choose": ["豊田工業高等専門学校", "豊田市駅", "麦笑らーめん", "Felna"],
          "comment": "正解は1番の豊田工業高等専門学校でした！\n難易度の高い問題でした．問題分に記されているのは日本測地系かつDMS形式なのでgoogle mapに適合させるために世界測地系かつDegree形式に変換する必要がありました．\n\
          変換にはとても面倒くさい計算が必要ですが，自動で計算して変換をしてくれるサイトがあるのでそれを利用して座標を求めます．すると地図の中央の方に豊田高専が映るはずです．"},
     13: {"choose": ["3", "6", "9", "12"],
          "comment": "正解は2番の6でした！\n計算自体は簡単ですが，表記がややこしい問題です．この表記はTeX記法といい，LaTeXなどで使用されるものです．\\frac{分子}{分母}は小数を表現しています．log_2 4 ×　πの近似値を選べば正解です．"},
     14: {"choose": ["こうせんはいいぞ", "こうせんだいすき", "とよたしさいこう", "がりょうてんせい"],
          "comment": "正解は1番のこうせんはいいぞでした！\nある文字コードとはASCIIのことです．ASCIIの表は調べればでてくるので，簡単に変換できます．"},
     15: {"choose": ["かめら", "とよた", "ゆうき", "まうす"],
          "comment": "正解は4番のまうすでした！\nシーザー暗号は最も単純で広く知られた暗号のひとつで，平文の各文字を辞書順に３文字ずつずらして復号します．"},
     16: {"choose": ["2", "4", "6", "8"],
          "comment": "正解は4番の8でした！\n情報工学の基本的な問題です．(本科一年生の前期の範囲です．)\n\
          なぜ8bit = 1byteになったのかというと処理する文字が英語の小文字大文字，特殊文字と増えていくにつれて4bitでは足りない...6bitでは足りない...となっていき7bit必要になりました．\
          さらに通信用のパリティビットを加えて8bitとなったのです．そもそも奇数では半分にできないので消去法で8となったそうです．へぇ～"},
   }
  };
},
  methods: {
    Post_Question() {
      // this.$axios.post('http://localhost:8080/',
      // this.$axios.post('https://plated-campaign-291611.df.r.appspot.com/',
      this.$axios.post('/api',
      // {question: this.question, user_answer: this.user_answer}, this.requestHeader)
      {question: this.id, user_answer: this.user_answer})
          .then((response) => {
            // console.log(response);
            // console.log(response.data);
            // console.log(JSON.parse(response.data).isCorrect);
            // this.jadge = true;
            this.$localStorage.set('jadge'+String(this.id), true);
            // this.isCorrect = response.data["isCorrect"+this.id];
            this.$localStorage.set('isCorrect'+String(this.id), JSON.parse(response.data).isCorrect);
            this.loading = true;
            // console.log('jadge'+String(this.id)+': '+this.$localStorage.get('jadge'+String(this.id)));
            // console.log('isCorrect'+String(this.id)+': '+this.$localStorage.get('isCorrect'+String(this.id)));

            if (JSON.parse(response.data).err) {
              this.$localStorage.set('jadge'+String(this.id), false);
              alert("エラーが発生しました．時間を置いて再度送信してください．解決しない場合は2I教室の学生に相談してください．");
            } else {
              setTimeout(() => {
                  this.loading = false;
                },
                3000
              );
            }

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
      // this.$localStorage.set('jadge', Array(16).fill(false));
    },
    Btn_Disabled() {
      if (this.$localStorage.get('jadge'+this.id) == 'true') {
        return true;
      } else {
        return false;
      }
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
.comment-card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
