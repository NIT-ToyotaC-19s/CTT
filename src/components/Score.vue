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
    <p>Total Scoreが4以上になると景品と交換できます．</p>
    <br>
    <v-btn @click="Complete" :disabled="complete">completed!</v-btn>
    <p>※このボタンを押すと景品交換済みとなります．受付の学生以外は操作しないでください．</p>
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
      complete: false,
    };
  },
  methods: {
    Complete() {
      this.$localStorage.set("complete", true);
      this.complete = this.$localStorage.get('complete');
      // console.log(this.$localStorage.get("complete"));
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
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
</style>
