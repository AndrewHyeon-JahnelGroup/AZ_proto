<template>
  <div class="platform">
    <div class="image">
      <img src="../assets/img_1.jpg">
    </div>
    <div class="text">
      <p> The <b>world's First</b>. All-Encompassing Digital Arts Platform</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      msg: 'Overview',
      overview1: 'Azura is the world’s first all-encompassing digital art platform. Comprised of three main elements that combine real-world art preservation with innovative blockchain and distributed ledger technology, Azura seeks to provide the mechanism by which the world of physical art and it’s provenances can authentically and verifiably enter the digital world. ',
      overview2: 'Each of Azura’s “big three” work together to create a definitive platform that enhances and modernizes how we interact with world’s oldest cultural commodity. ',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
  position: absolute;
  top: 110px;
  margin: 0px;
  padding: 0px;
  height: 50%;
  z-index: 0;
}
.platform{
}

.text {
  position: absolute;
  top: 50vh;
  left:60%;
  padding-right: 50px;
  width: 35%;
  font-size: 30px;
  line-height: 30px;
}

</style>
