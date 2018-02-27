<template>
  <div class="row bottom fixed-bottom">
    <div class="col-md-6 map">
      <h3> bottom bar </h3>
    </div>
    <div class="col-md-4 location text-left">
      <h3> bottom bar </h3>

    </div>
    <div class="col-md-2 location">
<h3> bottom bar </h3>
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
  color: white;
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
  height: 50px;
  background-color: #070029;
}
</style>
