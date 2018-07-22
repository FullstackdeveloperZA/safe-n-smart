<template>
<div>
    <img src="@/assets/categoriesimage-01.jpg" alt="categories image">
    <h1>Categories</h1>
  <categories-main></categories-main>
  <v-layout align-center justify-center>
    <v-flex xs12 sm4 text-xs-center>
   
    </v-flex>
  </v-layout>
  <img src="@/assets/bananacondom -01.png" alt="banana condom">
<!--   <h2>Tip #9: Condoms should fit snugly on the penis, but that can lead to a loss of erection.</h2> -->
  <cool-info></cool-info>
  <img class="fifthhomeimage" src="@/assets/homeimage-01.png" alt="gradient2">
<!--   <h3>Tip #5: As with fisting, the best way to help a guy’s ass relax is with a gentle, steady, in-and-out rhythm. </h3> -->
  <ask-question></ask-question>
</div>
</template>

<script>
import navBar from "@/components/navbar.vue";
import categoriesMain from "@/components/categoriesMain.vue";
import coolInfo from "@/components/coolinfo.vue";
import askQuestion from "@/components/askquestion.vue";
import bottomBar from "@/components/bottombar.vue";

export default {
  name: "app",
  components: {
  navBar,
 categoriesMain, 
 coolInfo,
 askQuestion,
 bottomBar,
  }
};
</script>

<style scoped>

.button {
font-family: Helvetica, sans-serif;
}

img {
   margin: 0px 0px 0px 0px;
  width: 100%;
}

h1{
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  color: #414042;
  padding-left: 20px;
  margin: 50px;
}

h2 {
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 20px;
  position: absolute;
  left: 40px;
  margin: -650px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

h3 {
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  line-height: 80px;
  padding-left: 20px;
  position: absolute;
  left: 40px;
  margin: -650px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

.fifthhomeimage {
   margin: 0px 0px 0px 0px;
  width: 100%;
}
</style>

