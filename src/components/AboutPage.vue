<template>
  <div class="aboutpage container">
    <div class="col-md-6">
    </div>
    <div class="col-md-6">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'About',
      content: 'Founded in 2018, Azura is a Los Angeles based company with offices in New York and Spain. It’s team includes some of the art world’s most forward-thinking visionaries as well as a growing roster of highly revered contemporary artists. ',
    }
  }
}
</script>

<style>

body{
  width: 100%;
  height: 100%;

}
.abouttpage {
  background-image: url(../assets/img1.jpg);
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.abt {
  text-align: center
}

#about {
  width: 100%;
  text-align: center;
}

</style>
