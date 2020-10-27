<template>
  <div class="map">
    <br>
    <p class='title-border'>Map</p>
    <br>
    <!-- <img src="../assets/nittc_map.png"> -->
    <br>
    問題掲載場所を記した校内地図
    <img src="../assets/nittc_question_map.png">
    <br>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
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
  width: 100%;
}
</style>
