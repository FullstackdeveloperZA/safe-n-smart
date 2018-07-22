<template>
    <body>
<img src="@/assets/coolinfotheme-01.png" alt="hero image">
 <h1>Drug use</h1>
<v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks1" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
<v-flex ma-3>LGBTQ drug use must be understood within the context of the stigma, prejudice, and discrimination to which LGBTQ people are constantly exposed to. When substances are illegal and unregulated there is no control over their purity or strength.
This puts people who use substances at added risk for illness and overdose.</v-flex>
<v-flex ma-3>
People may also face risks such as criminalization, stigma, and discrimination as a result of their substance use. For these reasons, people who use substances may be hesitant to discuss their use, even with their health care providers.
Harm reduction takes a non-judgmental approach that supports people in making decisions about their drug use. LGBTQ people may reduce drug-related harms by knowing and managing the risks associated with particular drugs, choosing less risky drugs, or planning ahead for safer use, as well as by seeking treatment, and reducing or eliminating substance use. Harm reduction also acknowledges that many people use drugs without encountering any problems.</v-flex>

 <h1>Types of drugs</h1>
<v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks2" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
   <h2>List of most commonly used drugs.</h2>
   <graph1></graph1>
 <p>Individuals may be more likely to try harder drugs and use them regularly when they are surrounded by drug abuse. When new drugs enter a community, they may be sold first in popular bars and clubs, and gay-themed clubs may have more regular drug users than other bars. Gay clubs may have a reputation for lax rules about illegal substances, as many club owners may fear alienating a small community.</p>
<p>The use of poppers among gay men has remained a popular way to relax and enhance sexual pleasure. LGBT individuals often encounter homophobia and anti-gay harassment through their youth and adulthood, so they may compensate for low self-esteem by pursuing casual sex or drugs.</p>
<p>Gay and bisexual men may also be more likely to abuse stimulants such as cocaine or methamphetamine. These drugs cause euphoria and increase energy and awareness, which may make them popular in dance clubs, private male-only saunas or bathhouses where sexual activity may take place.</p>

 <h1>Safety guide</h1>
<v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks3" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
   <h2>Trends in drug use.</h2>
 <p><b>Nyaope:</b> Nyaope is a cocktail of dagga, heroin, Anti-retro-viral drugs, rat poison and acid.Nyaope, also known as Whoonga, is a uniquely South African street drug that is highly addictive and destructive. It is a fine white powder that is usually combined with marijuana (dagga) and smoked. The fine white powder can be made up from anything from rat poison, heroin, detergent powder, antiretroviral drugs, milk powder, pool cleaner to bicarbonate of soda.</p>
<p><b>Bluetooth:</b> Bluetooth is a new craze where Nyaope addicts inject themselves with blood drawn from an already high user however, it has a placebo effect only. Addicts who use this method of taking the heroin-laced drug are only inflicting pain on their bodies and exposing themselves to diseases.</p>
<p><b>Flakka:</b> Flakka is a hallucinogenic drug that causes panic and hysteria. Hundreds of videos have surfaced on social media showing users in a state of panic, unable to talk or understand what is going on around them.They are unresponsive and pose a danger to themselves and others.</p>
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
            name: 'Safety guide',
        },
        ]
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
  padding-left: 20px;
  margin: 50px;
}

h2{
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  color: #414042;
  padding-left: 20px;
  margin: 50px;
}

.druguse {
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
}

.druguse:nth-child(1) {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
}

.druguse:nth-child(2) {
    background: -webkit-linear-gradient(top, #ff9ce8 0%,#74fffb 100%);
    width: 10%;
}

p {
/*   font-family: Helvetica, sans-serif; */
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
  padding-left: 20px;
  margin: 50px;
}

h5 {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: normal;
}
</style>

