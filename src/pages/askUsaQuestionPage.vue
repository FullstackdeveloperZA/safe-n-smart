<template>
    <body>
         <img src="@/assets/questions-01.png" alt="questionheroimage">
        <h1 class="headline">Do you have any unanswered questions? <br> Write to us about your situation and we will gladly give you advice.</h1>
<v-form class="form"  v-model="valid">
    <v-text-field
      class="subheading"
      label="What should we call you?"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
    class="subheading"
      label="Tell us about your problem."
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    
    <v-flex class="text-xs-center" >
<v-btn class="button"  large color="white">View More</v-btn>
</v-flex>
  </v-form>


         <h3>Categories</h3>
         <categoriessub></categoriessub>
         <img src="@/assets/askquestiongradient-01.png" alt="questionheroimage">
         <h4>Tip #7: The idea that “loose” holes are weakened or overworked through too much sex is simply false.</h4>
         <cool-info></cool-info>
        <img class="fifthhomeimage" src="@/assets/homeimage-01.png" alt="gradient2"> 
        <h5>Tip #8: Chemsex is risky, because you are putting a range of substances into your body which can slow <br> and speed your heart rate.</h5>       
         <contact-us></contact-us>
    </body>
</template>

<script>
import navBar from "@/components/navbar.vue";
import categoriessub from "@/components/categoriessub.vue";
import coolInfo from "@/components/coolinfo.vue";
import contactUs from "@/components/contactus.vue";
import bottomBar from "@/components/bottombar.vue";

   export default {
       name: "app",
        components: {
        navBar,
     categoriessub,
     coolInfo,
     contactUs,
     bottomBar
        },
        
  data() {
    return {
        blocks1: [ {
            id: 1,
            name: 'Drug use',
        },
        ],
                blocks2: [ {
            id: 1,
            name: 'Types of drugs',
        },
        ],
                blocks3: [ {
            id: 1,
            name: 'safety guide',
        },
        ]
    };
    {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Field is required',
      ]
    })
  }
  }
  
}
</script>

<style scoped>
body {
    width: 100%;

}

img {
    width: 100%;
}

h1{
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  line-height: 40px;
  color: #414042;
  padding-left: 20px;
  margin: 50px 0px 0px 20px;
}

h2{
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  color: #414042;
  padding-left: 20px;
  margin: 50px 0px 0px 20px;
}

h3{
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  color: #414042;
  padding-left: 20px;
  margin: 50px;
}
h4 {
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 20px;
  line-height: 70px;
  position: absolute;
  left: 40px;
  margin: -650px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

h5 {
  font-family: Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 20px;
  line-height: 70px;
  position: absolute;
  left: 40px;
  margin: -650px 0px 0px 0px;
  text-shadow: 1px 1px 1px #939598;  
}

.form {
  margin: 50px 0px 0px 50px;
}

</style>



