<template>
  <div class="frontpage">
    <div class="col">
      <h1 class="abt">{{ msg }}</h1>
    </div>
    <div class="row">
      <div class="col-md-12" id="about">
        <p>{{ content }}</p>
      </div>
    </div>
    <div class = "loadercontainer">
      <div class="loader">
        <div id="largeBox"></div>
        <div id="smallBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'About',
      content: 'Founded in 2018, Azura is a Los Angeles based company with offices in New York and Spain. It’s team includes some of the art world’s most forward-thinking visionaries as well as a growing roster of highly revered contemporary artists. '
    }
  }
}
</script>

<style>
.frontpage {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
.abt {
  text-align: center
}
#about {
  width: 80%;
  text-align: center;
}

</style>
