<template>
    <div>
        <img src="@/assets/helpline-01.png" alt="">
            <h1>Helpline</h1>
            <p>Need someone to talk to?</p>
           <v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks1" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
   <div>
   <p class="gbv">Gender-Based Violence Command Centre</p>
   <p>24/7 Support</p>
   <p class="contact"><b>Emergency Line Number :</b>   0800 428 428</p>
   <p class="contact1"><b>USSD :</b>  *120*7867#</p>
   <p class="skype"><b>Skype(Deaf Community) :</b>  HELPME GBV</p>
   </div>
              <v-container>
    <v-layout align-center justify-center  wrap>
        <v-flex title xs12 sm5 md3 v-for="item in blocks2" :key="item.id" class="druguse">
          <h5 class="white--text" >{{item.name}}</h5> 
        </v-flex>
    </v-layout>
   </v-container>
   <div>
   <p class="gbv">South African Depression and Anxiety Group</p>
<!--    <p>24/7 Support</p> -->
   <p class="contactnew"><b>To contact a counsellor between 8am-8pm Monday to Sunday :</b>   0800 428 428</p>
   <p class="contact1"><b>For a suicidal Emergency :</b>  0800 567 567</p>
   <p class="skype"><b>24hr Helpline :</b>  0800 12 13 14</p>
   <img src="@/assets/tipgradient-01.png" alt="">
   <contact-us></contact-us>
   </div>
    </div>
    
</template>

<script>
import contactUs from "@/components/contactus.vue";

 export default {
            name: "app",
        components: {
        contactUs,
        },
  data() {
    return {
        blocks1: [ {
            id: 1,
            name: 'GBV Command Centre',
        },
        ],
                blocks2: [ {
            id: 2,
            name: 'SADAG Helpline',
        },
        ],
                blocks3: [ {
            id: 3,
            name: 'Safety guide',
        },
        ]
    };
    
  },
}
</script>

<style scoped>
img {
    width: 100%;
}

h1{
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  color: #414042;
  margin: 50px 0px 20px 50px;
}

p {
/*   font-family: Helvetica, sans-serif; */
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin: 0px 0px 0px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.contact {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:25px 0px 20px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.contactnew {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:50px 0px 20px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.contact1 {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:0px 0px 20px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.skype {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:0px 0px 100px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.hour {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:0px 0px 100px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.gbv {
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  color: #414042;
  margin: 50px 0px 20px 50px;
}

.contactday {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin: 0px 0px 20px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.suicide {
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin:0px 0px 20px 50px;
  top: 15%;
  line-height: 30px;
  width: 1200px;
}

.druguse {
padding: 30px;
min-height: 270px;
margin: 10px;
border-radius: 10px;
}

.druguse:nth-child(1) {
    background: -webkit-linear-gradient(top, #75c3dc 0%,#fde2e1 100%);
    width: 10%;
}

.druguse:nth-child(1) {
    background: -webkit-linear-gradient(top, #75c3dc 0%,#fde2e1 100%);
    width: 10%;
}
</style>
