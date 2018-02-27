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
  background: #b59232; /* Old browsers */
  background: -moz-linear-gradient(top, #b59232 0%, #0c113f 29%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #b59232 0%,#0c113f 29%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #b59232 0%,#0c113f 29%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b59232', endColorstr='#0c113f',GradientType=0 ); /* IE6-9 */
}
</style>
