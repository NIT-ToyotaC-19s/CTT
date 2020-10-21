<template>
  <div class="score">
    <br>
    <p class="title-border">Your Score</p>
    <br>
    <h2>Score(corrent answers)</h2>
    <br>
    <h1>{{ score }}</h1>
    <br>
    <p style="padding-bottom:600px">❍個以上正解すると景品がもらえます．</p>
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
      score: [this.$localStorage.get('isCorrect1'), this.$localStorage.get('isCorrect2'), this.$localStorage.get('isCorrect3'), this.$localStorage.get('isCorrect4'),
                this.$localStorage.get('isCorrect5'), this.$localStorage.get('isCorrect6'), this.$localStorage.get('isCorrect7'), this.$localStorage.get('isCorrect8'),
                this.$localStorage.get('isCorrect9'), this.$localStorage.get('isCorrect10'), this.$localStorage.get('isCorrect11'), this.$localStorage.get('isCorrect12'),
                this.$localStorage.get('isCorrect13'), this.$localStorage.get('isCorrect14'), this.$localStorage.get('isCorrect15'), this.$localStorage.get('isCorrect16')].filter(function(x){return x==true}).length,
    };
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
</style>
