<template>
<div>
    <img src="@/assets/friendly services map-01.png" alt="">
    <h1>MSM friendly services map</h1>
    <v-layout style="min-height: 100vh;" column fill-height class="pa-2">
            <gmap-map class="d-flex" :center="addressConfig.mapCenter" :zoom="addressConfig.mapZoom" map-type-id="terrain" style="flex:3 1 auto; background-color:primary; min-height:200px;">
              <gmap-marker :key="index" v-for="(m, index) in addressConfig.pins" :position="m.position" :clickable="true" :draggable="false"
                :label="`★${m.name[0]}`" @click="center=m.position">
                <gmap-infoWindow :position="m.position" :opened="true" :options="{content: getInfoWindowHtml(m) }">
                </gmap-infoWindow>

              </gmap-marker>

            </gmap-map>
          </v-layout>
</div>
</template>

<script>
import config from '@/appConfig/config'

export default {
    data () {
        return {
            addressConfig: config.kpmaps,
        }
    },
    methods: {
        getInfoWindowHtml(m) {
        let gDirectionsLink = `https://www.google.com/maps?saddr=My+Location&daddr=${m.addressText.replace(/ /g,'+')}`;
        // https://www.google.co.za/maps/dir/-26.0023425,27.9817217/5+Frank+May+St,+Aqua+Park,+Tzaneen,+0850
        return `<strong>${m.name}</strong><br/>
        ${m.addressText}<br/>
     ${m.image}`
      },
    }

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
  padding-left: 20px;
  margin: 50px;
}
</style>
