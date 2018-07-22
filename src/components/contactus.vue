<template>
    <div>
        <header>
<h1>Contact Us</h1>
        </header>
<router-link to="/contactUs">
  <v-flex class="text-xs-center" >
<v-btn class="button"  large color="white">Take me there</v-btn>
</v-flex>
</router-link>
<router-view></router-view>
    </div>
</template>

<script>
       export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  font-family: Helvetica, sans-serif;
  color: #414042;
  font-size: 40px;
  text-align: left;
  margin: 50px 0px 0px 0px;
  top: 15%;
  transform: translate(5%,5%)
}

.title {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin: 100px 0px 0px 10px;
  transform: translate(6%,10%);
  line-height: 30px;
  width: 1200px;
}

.title1 {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  color: #808285;
  text-align: left;
  margin: 10px 0px 0px 10px;
  transform: translate(6%,10%);
  line-height: 30px;
  width: 1200px;
}

.button {
  text-decoration: none;
  color: black;
  font-family: Helvetica, sans-serif;
  margin: 50px;
  position: relative;
  text-align: center;
}

</style>
