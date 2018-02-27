<template>
  <div class="row bottom">
    <div class="col-md-6 map">
      <gmap-map
        class="gmap"
        :center="center"
        :zoom="12"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        >
        </gmap-marker>
      </gmap-map>
    </div>
    <div class="col-md-4 location text-left">


    </div>
    <div class="col-md-2 location">

    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data () {
    return {
      msg: '',
      content: '',
      center: {},
      markers: [{
        position: {}
      }],
      address: []
    }
  }
}
</script>

<style scoped>
.map {
  padding: 25px;
  padding-left: 50px;
  max-width: 500px;
  min-width: 300px;

}

.gmap{
  max-width: 500px;
  min-width: 300px;
  height: 100%
}

.location {
  padding-top: 25px;
  position: relative;
  text-align: left;
  max-width: 325px;
}

.bottom {
  width: 100%;
  height: 350px;
  background-color: #D5D5D5;
}
</style>
