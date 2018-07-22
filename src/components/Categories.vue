<template>
<v-container>
  <v-layout align-center justify-center wrap>
    <v-flex @click="$router.push({ name: 'Categories Detail', params: { categoryId: item.id }})" title xs12 sm5 md3 v-for="item in blocks" :key="item.id" class="colourblock">
      <h5 class="white--text" >{{item.name}}</h5> 
    </v-flex>
  </v-layout>
  <v-flex class="text-xs-center" >
      <router-link to="/categoriespage">
<v-btn class="button"  large color="white">View More</v-btn>
</router-link>
</v-flex>
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
        },
        {
            id: 2,
            name: 'Low-risk sex',
        },
        {
            id: 3,
            name: 'High-risk sex',

        },
        {
            id: 4,
            name: 'HIV',

        },
        {
            id: 5,
            name: 'Foreplay',

        },
        {
            id: 6,
            name: 'STIs',

        },
        ]
    };
  }
};


</script>

<style scoped>

.colourblock {
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
cursor: pointer;
}

.colourblock:nth-child(1) {
background: -webkit-linear-gradient(top, #f6cd68 0%,#faaa7e 100%);
}

.colourblock:nth-child(1):hover {
background: -webkit-linear-gradient(top, #f6cd68 0%,#faaa7e 100%);
transform: scale(1.05);
}

.colourblock:nth-child(2) {
    background: -webkit-linear-gradient(top, #2af497 0%,#08ade9 100%);
}

.colourblock:nth-child(2):hover {
    background: -webkit-linear-gradient(top, #2af497 0%,#08ade9 100%);
    transform: scale(1.05);
}

.colourblock:nth-child(3) {
    background: -webkit-linear-gradient(top, #ffe43b 0%,#ff2525 100%);
}

.colourblock:nth-child(3):hover {
    background: -webkit-linear-gradient(top, #ffe43b 0%,#ff2525 100%);
    transform: scale(1.05);
}

.colourblock:nth-child(4) {
    background: -webkit-linear-gradient(top, #fde040 0%,#f97099 100%);
}

.colourblock:nth-child(4):hover {
    background: -webkit-linear-gradient(top, #fde040 0%,#f97099 100%);
    transform: scale(1.05);
}

.colourblock:nth-child(5) {
    background: -webkit-linear-gradient(top, #dfc2fb 0%,#8dc4fb 100%);
}

.colourblock:nth-child(5):hover {
    background: -webkit-linear-gradient(top, #dfc2fb 0%,#8dc4fb 100%);
    transform: scale(1.05);
}

.colourblock:nth-child(6) {
    background: -webkit-linear-gradient(top, #dcd5f2 0%,#f9aba7 100%);
}

.colourblock:nth-child(6):hover {
    background: -webkit-linear-gradient(top, #dcd5f2 0%,#f9aba7 100%);
    transform: scale(1.05);
}

.button {
    font-family: Helvetica, sans-serif;
    margin: 50px 0px 50px 0px;
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
}

.button {
    text-decoration: none;
    color: black;
}
</style>

