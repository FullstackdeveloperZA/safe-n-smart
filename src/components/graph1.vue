/* :style="`width:${item.percentage}`"  */
<template>
<div>
    <v-container class="container">
    <v-layout align-center justify-center wrap>
       <!-- <router-link></router-link> -->
        <v-flex title xs12 sm12 md12 v-for="item in blocks" :key="item.id" class="empty">
            <v-layout class="layout" >
        <v-flex class="name" sm2 >{{item.name}}</v-flex>
        <v-flex sm10 align-left>
        <div class="percentagebar" :style="`width:${item.percentage}%`" ><!-- {{item.percentage}}% --></div>
        </v-flex>
        </v-layout>
        </v-flex>
    </v-layout>
    <router-view></router-view>
 </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          id: 1,
          name: "GHB",
          percentage: 10
        },
        {
          id: 2,
          name: "Ketamine",
          percentage: 30
        },
        {
          id: 3,
          name: "LSD",
          percentage: 30
        },
        {
          id: 4,
          name: "Meth",
          percentage: 40
        },
        {
          id: 5,
          name: "Cocaine",
          percentage: 40
        },
        {
          id: 6,
          name: "Ecstasy",
          percentage: 40
        },
        {
          id: 7,
          name: "Mushrooms",
          percentage: 60
        },
        {
          id: 8,
          name: "Tobacco",
          percentage: 70
        },
        {
          id: 9,
          name: "Weed",
          percentage: 85
        },
        {
          id: 10,
          name: "Alcohol",
          percentage: 85
        }
      ]
    };
  }
};
</script>

<style scoped>
.empty {
  display: inline-block;
  margin: 20px 0px 0px 75px;
  border: -webkit-linear-gradient(top, #ff9ce8 0%, #74fffb 100%);
  border-radius: 8px;
}

.empty .layout {
  background-color: #cecece;
  border-radius: 8px;
}



.name {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  color: #cecece;
  margin: 8px 0px 0px -180px;
}

.percentagebar {
    font-family: Helvetica, sans-serif;
    color: #1f1f1f;
    background: -webkit-linear-gradient(bottom right, #74fffb 0%,#ff9ce8 100%);
    min-height: 30px;
    min-width: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 3px 2px 12px -4px rgba(115,115,115,1);
    -moz-box-shadow: 3px 2px 12px -4px rgba(115,115,115,1);
    box-shadow: 3px 2px 12px -4px rgba(115,115,115,1);
    animation: percentagebar 3s 1;
}

@keyframes percentagebar {
0% {
    height: 0%;
    top: 100%;
}
100% {
    height: 30%;
}
}

</style>
