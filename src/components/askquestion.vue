<template>
<body>
   <h1>Ask us a question</h1>
   <router-link to="/askUsaQuestionPage">
  <v-flex class="text-xs-center" >
<v-btn class="button"  large color="white">Teach me more</v-btn>
</v-flex>
</router-link>
<router-view></router-view>
  </body>
</template>

<script>
    export default {
  data() {
    return {};
  }
};

</script>

<style scoped>

body {
  display: inline;
  

}

.button {
  font-family: Helvetica, sans-serif;
  margin: 50px;
  position: relative;
  text-align: center;
}

h1 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

.button {
  text-decoration: none;
  color: black;
}

</style>

