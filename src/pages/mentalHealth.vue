<!--        <img src="@/assets/mental health-01.png" alt=""> -->
<template>
    <body>
<img src="@/assets/mental health-01.png" alt="">
 <h1>Mental health</h1>
<v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks1" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
   <v-flex ma-3>
MSM are disproportionally affected by mental health problems. Epidemiological studies demonstrate that sexual minorities are at increased risk for depressive, anxiety, and substance use disorders. Similarly, among HIV-infected men, there are elevated rates of depression, posttraumatic stress (PTSD), other anxiety disorders, and substance use disorders.</v-flex>
   <v-flex ma-3>
Why might there be higher rates of mental health problems among MSM than heterosexual men? Sexual minority stress likely plays a role. Sexual minority stress is defined as “…excess stress to which individuals from stigmatized social categories are exposed as a result of their social, often a minority position”. Examples of sexual minority stress include stigma, prejudice, internalized homophobia, concealing one’s identity, and expectations of rejection due to one’s sexuality. In addition, the socialization pressures on gay men to present themselves as traditionally masculine, and the negative consequences for behaving in gender atypical ways can result in increased distress. These types of stressors may represent vulnerabilities for the subsequent development of mental health problems among gay men.
</v-flex>

 <h1 class="headline" pa-0>Mental health and HIV risk among MSM</h1>
<v-flex ma-3>Among MSM, mental health problems are also associated with HIV risk. Studies of co-occurring psychosocial problems show that there is an additive risk with each psychological problem with respect to sexual risk taking behavior in MSM.Poor mental health caused by stress can lead to men who have sex with men (MSM)
to engage in high HIV risk behaviour including having unprotected sex, multiple sexual partners and alcohol or drug abuse.</v-flex>

 <h1 class="headline">Promoting good mental health</h1>
<v-flex ma-3><b>1.</b>Developing open communication between
partners to foster commitment, trust and enhance
relationship planning, in order to understand
where the relationship is heading. </v-flex>
<v-flex ma-3><b>2.</b>Concluding a clear sexual agreement which
defines acceptable behaviour within the
relationship and spells out what behaviours will
lead to the ending of the relationship.</v-flex>
<v-flex ma-3><b>3.</b> Finding ways of building resilience and coping
with the stigma and discrimination which MSM
experience. Support from a partner lessens
the social anxiety and isolation which fear of
discrimination causes and reduces the negative
emotions experienced when such discrimination is
encountered.</v-flex>
<v-flex ma-3><b>4.</b>Identifying safe spaces where MSM couples can
express themselves freely, and demonstrate
their love for one another, without fear of
discrimination and implicit or explicit microaggressions.</v-flex>
<h3>Categories</h3>
<categoriessub></categoriessub>
    </body>
</template>

<script>
import navBar from "@/components/navbar.vue";
import categoriessub from "@/components/categoriessub.vue";
import bottomBar from "@/components/bottombar.vue";
import graph1 from "@/components/graph1.vue"

   export default {
       name: "app",
        components: {
        navBar,
        categoriessub,
        bottomBar,
        graph1,
        },
  data() {
    return {
        blocks1: [ {
            id: 1,
            name: 'mental health',
        },
        ],
    };
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
  font-size: 40px;
  color: #414042;
  margin: 50px;
}

h2{
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  color: #414042;

  margin: 50px;
}

h4 {
   font-family: Helvetica, sans-serif;
  font-size: 25px;
  color: #414042;

  margin: 100px 0px 50px 0px;   
}

.druguse {
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
}

.druguse:nth-child(1) {
    background: -webkit-linear-gradient(top, #ff9c73 0%,#74fffb 100%);
    width: 10%;
}

p {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin: 50px 0px 50px 0px;
  top: 15%;
  transform: translate(6%,10%);
  line-height: 30px;
  width: 1200px;
}

h3{
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  color: #414042;

  margin: 50px;
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
}
</style>


