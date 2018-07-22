<template>
<div>
  <v-flex style="flex:3 1 auto; min-height:200px;" >
<img class="heroimage" src="@/assets/heroimage.jpg" alt="heroimage">
</v-flex>
 <v-flex class="box" xs sm md lg>
<!-- <h1>Safe sex guide for gay guys.</h1> -->
 </v-flex>

<!-- <p class="imagetext">Safe sex guide for gay guys.</p> -->
<about-us></about-us>
<div>
<!--   <h2 xs sm md lg>Tip #1: Any kind of masturbation is perfectly safe:<br> you can’t infect yourself.</h2> -->
<img class="secondhomeimage" src="@/assets/imagehomepage-01.jpg" alt="guy body">
</div>
<h3 xs sm md lg>Categories</h3>
<categories></categories>
<!-- <p class="imagetext2">Safe sex guide for gay guys.</p> -->
<img class="thirdhomeimage"  src="@/assets/imagehomepage-02-01.png" alt="menkissing">
<!-- <h4>Tip #2: Before becoming sexually active with your partner, find out if he is HIV+.</h4> -->
<!-- <ask-question></ask-question> -->
<!-- <img class="fourthhomeimage" src="@/assets/imagehomepage03-01.png" alt="gradient1"> -->
<cool-info></cool-info>
<img class="fifthhomeimage" src="@/assets/homeimage-01.png" alt="gradient2">
<!-- <h5>Tip #3: PrEP is effective in preventing HIV<br>even if you don’t use condoms.</h5> -->
<contact-us></contact-us>
</div>
</template>

<script>
import Skills from "@/components/Skills.vue";
import AboutUs from "@/components/about.vue";
import Categories from "@/components/Categories.vue";
import askQuestion from "@/components/askquestion.vue";
import coolInfo from "@/components/coolinfo.vue";
import navBar from "@/components/navbar.vue";
import contactUs from "@/components/contactus.vue";
import bottomBar from "@/components/bottombar.vue";
import scrollBar from "@/components/scrollbar.vue";

export default {
  name: "app",
  components: {
    Skills,
    AboutUs,
    Categories,
    askQuestion,
    coolInfo,
    navBar,
    contactUs,
    bottomBar,
    scrollBar,
  }
};
</script>

<style scoped>

/*body*/

#app {
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*images*/

h1 {
    display: flex;
   font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 20px;
  margin: 100px 0px 0px 20px;
  position: absolute;
  top: 8px;
  left: 16px;
  text-shadow: 1px 1px 1px #939598;
}

h2 {
  display: flex;
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 20px;
  position: absolute;
  left: 40px;
  margin: 140px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

h3 {
  display: flex;
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 0px 0px 50px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

h4 {
  display: flex;
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  line-height: 80px;
  padding-left: 20px;
  position: absolute;
  left: 40px;
  margin: -1040px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

h5 {
  display: flex;
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  line-height: 80px;
  padding-left: 20px;
  position: absolute;
  left: 40px;
  margin: -680px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

.heroimage {
    width: 100%;
}

.secondhomeimage {
    display: flex;
   margin: 100px 0px 50px 0px;
  width: 100%;
}

.thirdhomeimage {
    display: flex;
   margin: 0px 0px 0px 0px;
  width: 100%;
}

.fifthhomeimage {
    display: flex;
   margin: 0px 0px 0px 0px;
  width: 100%;
}
/*text*/

.imagetext {
    display: flex;
  color: white;
  font-size: 60px;
  font-family: Helvetica, sans-serif;
  font-size: bold;
  position: absolute;
  margin-top: 0%;
  float: right;
  top: 35%;
  left: 46%;
  transform: translate(-100%, -100%);
  text-shadow: 0 0 10px grey;
}
.imagetext2 {
    display: flex;
  color: white;
  font-size: 60px;
  font-family: Helvetica, sans-serif;
  position: absolute;
  float: left;
  transform: translate(15%, 150%);
}

/* .box {
  display: flex;
} */

</style>