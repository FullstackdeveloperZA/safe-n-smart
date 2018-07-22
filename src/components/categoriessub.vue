<template>
<v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex @click="$router.push({ name: 'Categories Detail', params: { categoryId: item.id }})" title xs12 sm5 md3 v-for="item in blocks" :key="item.id" class="colourblock">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
 <router-link to="/categoriespage">
  <v-flex class="text-xs-center" >
<v-btn class="button"  large color="white">Teach me more</v-btn>
</v-flex>
</router-link>
  <router-view></router-view>
 </v-container> 
</template>

<script>
    export default {
  data() {
    return {
        blocks: [ {
            id: 1,
            name: 'Q&A',
            link: 'questionsandanswerspage'
        },
        {
            id: 2,
            name: 'Low-risk sex',
        },
        {
            id: 3,
            name: 'High-risk sex',

        },
        ]
    };
  }
};





</script>

<style scoped>

.colourblock {
cursor: pointer;
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
}

.colourblock:nth-child(1) {
    background: -webkit-linear-gradient(top, #f6cd68 0%,#faaa7e 100%);
    width: 10%;
}

.colourblock:nth-child(1):hover {
    background: -webkit-linear-gradient(top, #f6cd68 0%,#faaa7e 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(2) {
    background: -webkit-linear-gradient(top, #2af497 0%,#08ade9 100%);
    width: 10%;
}

.colourblock:nth-child(2):hover {
    background: -webkit-linear-gradient(top, #2af497 0%,#08ade9 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(3) {
    background: -webkit-linear-gradient(top, #ffe43b 0%,#ff2525 100%);
    width: 10%;
}

.colourblock:nth-child(3):hover {
    background: -webkit-linear-gradient(top, #ffe43b 0%,#ff2525 100%);
    width: 10%;
    transform: scale(1.05);
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
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

