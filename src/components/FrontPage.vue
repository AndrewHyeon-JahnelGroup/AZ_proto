<template>
  <div class="platform">
    <div class="row platformcontainer">
      <div class="col-md-4 white">
        <div class="goldtext">
          <p> The <b>world's First</b>. All-Encompassing Digital Arts Platform</p>
        </div>
      </div>

      <div class="col-md-8 frontpage">
        <div class="image">
          <img src="../assets/img_1.jpg">
        </div>
        <div class="fronttext">
          <p>{{ overview1 }}</p>
          <br />
          <p>{{ overview2 }}</p>
        </div>

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
<style>
.image{
  position: absolute;
  border: 0px;
  margin: 0px;
  padding: 0px;
  top: 35px;
  width: 100%;
  z-index: 0;
}
.platformcontainer {
  width: 100%;
  height: 100%;
  background-size: contain;
  margin: 0px
}

.white {
  position: relative;
  color: #B5A369;
  top: 40vh;
  left: 20vh;
  font-size: 30px;
  width: 200px;
  z-index: 2;
}

.goldtext {
  width: 100%;
  height: 120%;
  line-height: 30px;
}

.frontpage {
  padding: 0px;
  padding-top: 20px;
  margin: 0;
  position: relative;
}

.fronttext {
  position: absolute;
  top: 35vh;
  left:60%;
  padding-right: 50px;
  width: 35%;
}
.loadercontainer {
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.par{
  align-items: center;
  width: 80%;
  margin-top: 50px;
}
.loader {
  width: 3em;
  height: 3em;
  animation: loaderAnim 1.25s infinite;
  outline: 1px solid transparent;
}
.loader #largeBox {
  height: 3em;
  width: 3em;
  background-color: #34495e;
  outline: 1px solid transparent;
  position: fixed;
}
.loader #smallBox {
  height: 3em;
  width: 3em;
  background-color: #ECECEC;
  position: fixed;
  z-index: 1;
  outline: 1px solid transparent;
  animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}

@keyframes smallBoxAnim {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0.75);
  }
}
@keyframes loaderAnim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

</style>
