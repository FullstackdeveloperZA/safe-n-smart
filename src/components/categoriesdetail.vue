<template>
    <div>
<img :src="categoryData.turkerImage"/>
<h6 class="display-2">Information</h6>
<v-expansion-panel>
    <v-expansion-panel-content focusable popout value
      v-for="myQuestion in categoryData.questions" :key="myQuestion.id"
    >
      <div  slot="header"><h5 xs12 sm6 class="subheading">{{myQuestion.questionText}}</h5></div>
      <v-card class="intext">
        <v-card-text><p class="body-2">{{myQuestion.answerText}}</p></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
<v-layout column>
</v-layout>
<h3>Categories</h3>
<categoriessub></categoriessub>
<ask-question></ask-question>
    </div>
</template>

<script>
import categoryQuestionConfig from "@/appConfig/categoryQuestionConfig";
import categoriessub from "@/components/categoriessub.vue";
import askQuestion from "@/components/askquestion.vue";

export default {
    name: "app",
        components: {
        categoriessub,
        askQuestion,
        },
    props: [
        "categoryId"
    ],
    data () {
        return {
           categoryData: {} 
        }
    },
    mounted () {
        console.log(categoryQuestionConfig);
        let cId = this.categoryId
        let cConfig = categoryQuestionConfig.filter(cat => {
            return cat.id == cId
        })
        console.log(`the config we have here is`, cConfig);
        this.categoryData = cConfig[0]
    }
}
</script>

<style scoped>
img {
    width: 100%;
}

h3 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

h5 {
    font-size: 50px;
    margin: 0px 0px 0px 0px;
  padding-left: 20px;

}

h6 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

p {
    font-family: Arial, Helvetica, sans-serif;
    color: #808285;
}

.intext {
    display: inline-block;
    margin: 0px 50px 0px 50px;
}

.body-2{
margin: 0px 30px 0px 30px;
}
</style>
