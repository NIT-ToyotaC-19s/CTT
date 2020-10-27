<template>
  <div class="score">
    <br>
    <img src='../assets/undraw_completed_ngx6.svg' v-show="$localStorage.get('complete')">
    <br>
    <p class="title-border">Your Score</p>
    <br>
    <h2>Score(General)</h2>
    <br>
    <h1>{{ score1 }}</h1>
    <br>
    <h2>Score(Academic)</h2>
    <br>
    <h1>{{ score2 }}</h1>
    <br>
    <h2>Total Score</h2>
    <br>
    <h1>{{ score1 + score2 }}</h1>
    <br>
    <p>Total Scoreが0,4,8以上になると景品と交換できます．</p>
    <br>
    <p>景品は0~3がお菓子，4~7がお菓子(小袋)，8~がジュースです．</p>
    <br>
    <p>景品の内容は予告なく変わることがあります．</p>
    <br>
    <v-btn @click="Comp_Confirm" :disabled="$localStorage.get('complete')">completed!</v-btn>
    <p>※このボタンを押すと景品交換済みとなります．受付の学生以外は操作しないでください</p>
    <p>この操作は取り消せません．</p>
    <br>
    <br>
    <br>
    <v-btn @click="Get_Classroom">教室の人数を取得</v-btn>
    <br>
    <p class="number-of-people">教室内に{{ people }}人います</p>
    <br>
    <p>教室内に人が多い場合は時間をずらすなどして，3密を回避しましょう！</p>
    <br>
    <p>~ Avoid the three Cs ~</p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return{
      score1: [this.$localStorage.get('isCorrect1'), this.$localStorage.get('isCorrect2'), this.$localStorage.get('isCorrect3'), this.$localStorage.get('isCorrect4'),
               this.$localStorage.get('isCorrect5'), this.$localStorage.get('isCorrect6'), this.$localStorage.get('isCorrect7')].filter(function(x){return x==true}).length,
      score2: [this.$localStorage.get('isCorrect8'), this.$localStorage.get('isCorrect9'), this.$localStorage.get('isCorrect10'), this.$localStorage.get('isCorrect11'),
               this.$localStorage.get('isCorrect12'), this.$localStorage.get('isCorrect13'), this.$localStorage.get('isCorrect14'), this.$localStorage.get('isCorrect15'),
               this.$localStorage.get('isCorrect16')].filter(function(x){return x==true}).length * 2,
      people: "???",
    };
  },
  methods: {
    // Complete() {
    //   this.$localStorage.set("complete", true);
    //   this.$router.push('/');
    // },
    Get_Classroom() {
      this.$axios.get('https://koyosai-lisp.tk/api')
      .then((response) => {
        this.people = response.data['number'];
      })
      .catch((e) => {
        alert(e);
      })
    },
    Comp_Confirm() {
      if (confirm('CTTを終了し景品と交換しますか?\n※景品の交換は一度しかできません．この操作は取り消せません．受付の学生以外は操作しないでください．')) {
        this.$localStorage.set("complete", true);
        this.$router.push('/');
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
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
img {
  width: 100px;
}
.number-of-people {
  font-size: 30px;
  color: red;
}
</style>
