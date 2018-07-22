<template>
<div>
    <header>
<h1>Cool info</h1>
<p>Your information hub and guide on drugs.</p>
    </header>
    <v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks" :key="item.id" class="drugsblock">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
        <router-link to="/coolinfo">
          <v-flex class="text-xs-center" >
<v-btn class="button"  large color="white">Teach me more</v-btn>
</v-flex>
</router-link>
    </v-layout>
    <router-view></router-view>
 </v-container> 
</div>
</template>

<script>
 export default {
  data() {
    return {
        blocks: [ {
            id: 1,
            name: 'Drug use',
        },
        {
            id: 2,
            name: 'Types of drugs',
        },
        {
            id: 3,
            name: 'Safety guide',

        },
        ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

p {
    font-family: Helvetica, sans-serif;
    color: #808285;
  font-size: 20px;
  text-align: left;
  margin: 20px 0px 50px 0px;
  top: 15%;
  transform: translate(5%, 5%);
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
}

.coolinfo-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 6% 2%;
}

.coolinfo {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  -webkit-transform: 0.3s ease-in-out, -webkit-transfrom 0.3s ease-in-out;
  -moz-transform: 0.3s ease-in-out, -moz-transfrom 0.3s ease-in-out;
  transform: 0.3s ease-in-out, transfrom 0.3s ease-in-out;
}

.drugsblock {
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
}

.drugsblock:nth-child(1) {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
}

.drugsblock:nth-child(1):hover {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
    transform: scale(1.05);
}

.drugsblock:nth-child(2) {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
}

.drugsblock:nth-child(2):hover {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
    transform: scale(1.05);
}

.drugsblock:nth-child(3) {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
}

.drugsblock:nth-child(3):hover {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
    transform: scale(1.05);
}

.buttondiv {
    margin: 50px;
    width: 100%;
    height: 80%;
    padding: 10px;
    text-align: center;
}

.button {
  font-family: Helvetica, sans-serif;
  margin: 50px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: black;
}


</style>
