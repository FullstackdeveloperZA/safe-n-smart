<template>
<div>
  <h2>Categories</h2>
<div class="categories-section">

<ul class="grid">
  <li>
    <div class="categories1 image1">
      <a href="info">
      <a href="@/categories/qanda.png"><img class="c1" src="@/categories/qanda.png" alt="questions-and-answers"></a>
      <h1 class="QandA">QandA</h1> 
      </a>
    </div>
  </li>
    <li>
    <div class="categories1 image2">
      <a href="info">
      <a href="@/categories/lowrisksex-01.png"><img class="c2" src="@/categories/lowrisksex-01.png" alt="low-risk-sex"></a>
      <h3 class="lowrisksex">Low risk sex</h3>
      </a>
    </div>
  </li>
    <li>
    <div class="categories1 image3">
      <a href="info">
      <a href="@/categories/highrisksex.png"><img class="c3" src="@/categories/highrisksex-01.png" alt="high-risk-sex"></a>
      <h4 class="highrisksex">High risk sex</h4> 
      </a>
    </div>
  </li>
    <li>
    <div class="categories1 image4">
      <a href="info">
      <a href="@/categories/hiv.png"><img class="c4" src="@/categories/hiv-01.png" alt="hiv"></a>
       <h5 class="hiv">HIV</h5> 
      </a>
    </div>
  </li>
    <li>
    <div class="categories1 image5">
      <a href="info">
      <a href="@/categories/foreplay.png"><img class="c5" src="@/categories/foreplay-01.png" alt="foreplay"></a> 
      </a>
    </div>
  </li>
    <li>
    <div class="categories1 image6">
      <a href="info">
      <a href="./assets/stis.png"><img class="c6" src="@/assets/stis.png" alt="stis"></a>
       </a>
    </div>
  </li>
      <li>
    <div class="categories1 image6">
      <a href="info">
      <a href="./assets/sextoysfinal1.png"><img class="c6" src="@/assets/sextoysfinal1.png" alt="stis"></a>
       </a>
    </div>
  </li>
</ul>
<div class="buttondiv">
<v-btn class="button" align-center justify-center large color="white">view more</v-btn>
  </div> 
 </div>
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
 color: white;
  font-size: 22px;
  text-align: left;
 position: absolute;
 transform: translate(25%, 1030%);
}

h3 {
   font-family: Helvetica, sans-serif;
 color: white;
  font-size: 22px;
  text-align: left;
 position: absolute;
 transform: translate(15%, 1030%);
}

h2 {
  font-family: Helvetica, sans-serif;
  font-size: 40px;
  text-align: left;
  margin-top: 50px;
  top: 15%;
  transform: translate(5%, 5%);
}

h4 {
   font-family: Helvetica, sans-serif;
 color: white;
  font-size: 22px;
  text-align: left;
 position: absolute;
 transform: translate(15%, 1030%);
}

h5 {
   font-family: Helvetica, sans-serif;
 color: white;
  font-size: 22px;
  text-align: left;
 position: absolute;
 transform: translate(25%, 1030%);
}

/* 
.c7 {
  width: 285px;
  height: 285px;
} */
/* .c1 {
  width: 300px;
  height: 300px;
}

.c2 {
  width: 300px;
  height: 300px;
}

.c3 {
  width: 300px;
  height: 300px;
}

.c4 {
  width: 300px;
  height: 300px;
}

.c5 {
  width: 300px;
  height: 300px;
}

.c6 {
  width: 300px;
  height: 300px;
} */

/* .c8 {
  width: 285px;
  height: 285px;
} */

.categories-section {
  margin: 30px;
  padding: 6% 2%;
}

.categories1 {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  -webkit-transform: 0.3s ease-in-out, -webkit-transfrom 0.3s ease-in-out;
  -moz-transform: 0.3s ease-in-out, -moz-transfrom 0.3s ease-in-out;
  transform: 0.3s ease-in-out, transfrom 0.3s ease-in-out;
}


.grid {
  margin: 20px 20px 20px 0;
  padding: 0;
  list-style: none;
  display: block;
  text-align: center;
  width: 100%;
}

.grid:after {
  clear: both;
}

.grid:before {
  content: "";
  display: table;
}

.grid li {
  width: 250px;
  height: 250px;
  display: inline-block;
  margin: 25px;
}

.button {
  text-align: center;
  top: 30px;
}

.buttondiv {
    margin: 50px;
    width: 100%;
    height: 80%;
    padding: 10px;
    text-align: center;
}

</style>

