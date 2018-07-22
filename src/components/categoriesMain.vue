<template>
<v-container>
    <v-layout align-center justify-center  wrap>
       
        <v-flex @click="$router.push({ name: 'Categories Detail', params: { categoryId: item.id }})" xs12 sm5 md3 v-for="item in blocks" :key="item.id" class="colourblock">
          <h5 class="white--text">{{item.name}}</h5> 
        </v-flex>
    </v-layout>
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
            link: 'coolInfo'
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
         {
            id: 7,
            name: 'Sex Toys',

        },
         {
            id: 8,
            name: 'Chemsex',

        },
         {
            id: 9,
            name: 'Anal sex',

        },
            {
            id: 10,
            name: 'PrEP',

        },
            {
            id: 11,
            name: 'U=U',

        },
            {
            id: 12,
            name: 'Helpful tips',

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

.colourblock:nth-child(4) {
    background: -webkit-linear-gradient(top, #fde040 0%,#f97099 100%);
    width: 10%;
}

.colourblock:nth-child(4):hover {
    background: -webkit-linear-gradient(top, #fde040 0%,#f97099 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(5) {
    background: -webkit-linear-gradient(top, #dfc2fb 0%,#8dc4fb 100%);
    width: 10%;
}

.colourblock:nth-child(5):hover {
    background: -webkit-linear-gradient(top, #dfc2fb 0%,#8dc4fb 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(6) {
    background: -webkit-linear-gradient(top, #dcd5f2 0%,#f9aba7 100%);
    width: 10%;
}

.colourblock:nth-child(6):hover {
    background: -webkit-linear-gradient(top, #dcd5f2 0%,#f9aba7 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(7) {
    background: -webkit-linear-gradient(top, #a3d9eb 0%,#9498e1 100%);
    width: 10%;
}

.colourblock:nth-child(7):hover {
    background: -webkit-linear-gradient(top, #a3d9eb 0%,#9498e1 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(8) {
    background: -webkit-linear-gradient(top, #84ffbc 0%,#fffa7d 100%);
    width: 10%;
}

.colourblock:nth-child(8):hover {
    background: -webkit-linear-gradient(top, #84ffbc 0%,#fffa7d 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(9) {
    background: -webkit-linear-gradient(top, #f98aff 0%,#2bd1ff 50%,#2bff87 100%);
    width: 10%;
}

.colourblock:nth-child(9):hover {
    background: -webkit-linear-gradient(top, #f98aff 0%,#2bd1ff 50%,#2bff87 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(10) {
    background: -webkit-linear-gradient(top, #00d1e6 0%,#5d6ddf 100%);
    width: 10%;
}

.colourblock:nth-child(10):hover {
    background: -webkit-linear-gradient(top, #00d1e6 0%,#5d6ddf 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(11) {
    background: -webkit-linear-gradient(top, #c64e7e 0%,#5d6ddf 100%);
    width: 10%;
}

.colourblock:nth-child(11):hover {
    background: -webkit-linear-gradient(top, #c64e7e 0%,#5d6ddf 100%);
    width: 10%;
    transform: scale(1.05);
}

.colourblock:nth-child(12) {
    background: -webkit-linear-gradient(top, #9e5cff 0%,#c882a8 100%);
    width: 10%;
}

.colourblock:nth-child(12):hover {
    background: -webkit-linear-gradient(top, #9e5cff 0%,#c882a8 100%);
    width: 10%;
    transform: scale(1.05);
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
}
</style>

