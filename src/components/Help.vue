<template>
  <div class="help">
    <br>
    <p class="title-border">What's CTT ?</p>
    <p>Capture The Toyota(CTT)という名称はCapture The Flag(CTF)のパロディです．</p>
    <p>'''キャプチャー・ザ・フラッグ（Capture The Flag、略称: CTF）は、互いに相手陣地の旗を奪い合う騎馬戦や棒倒しに似た野外ゲームのことである。
    また、そこから派生して、ファーストパーソン・シューティングゲームなどのeスポーツや、コンピュータセキュリティなどの分野でも用いられている。
    特に、コンピュータセキュリティにおけるCTFは、しばしば「ハッカーコンテスト」などと意訳されて報じられる'''(引用: wikipedia)</p>
    <p>要はちょっと頭を使うクイズラリーみたいなものです．</p>
    <p class="title-border">How to do CTT ?</p>
    <p>CTTでは校内に配置された問題(Question)を解いてもらいます．</p>
    <p>問題は4択で一度解答を送信するともう一度答えることはできなくなります．そのため慎重に解答をしてください．また解き方は様々で，インターネットなどの使用は自由です．</p>
    <p>まずCatalogページを開いてください．そこには一般向けの問題(General)と情報向けの問題(Academic)の一覧があります．</p>
    <p>情報向けの問題は専門的な内容を含むので，意欲のある方はぜひ挑戦してください！</p>
    <p>Scoreページに正解した問題の数が表示されます．</p>
    <p>いくつか問題に正解したら，受付(2Iの教室)にてそのページを見せていただくことで，正解数に応じた景品をお渡しします．</p>
    <p class="title-border">When in trouble ...</p>
    <p>WebページやCTTの取り組み方について問題があった場合は2I教室にいる学生に訪ねてください．</p>
    <p>また，問題が難しくて分からないときは周りの学生に質問してみてください．</p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Help',
  props: {
    msg: String
  },
  data() {
    return{

  };
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.help {
  margin-left: 5%;
  margin-right: 5%;
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
