<template>
  <div class="digipres">
    <div class="slide1container row">

        <div class="left col-md-3">

          <div class="title">
            <p>Digitization and Preservation</p>
          </div>

          <div class="text">
            <p> {{text}}</p>
          </div>
          <div style="text-align:center">
            <span class="dot1" v-on:click="switchSlides"></span>
            <span class="dot2" @click.stop="switchSlides"></span>
            <span class="dot3" @click.stop="switchSlides"></span>
          </div>
        </div>

        <div class="right col-md-8">
          <img class="img" src="./../../assets/abt1.jpg">
        </div>


    </div>
  </div>


</template>

<script>
export default {
  name: 'DigiPres',
  methods: {
    switchSlides: function switchSlides(event) {
      var oldactive = document.getElementByClassName("active")
      console.log(oldactive)
      if(!oldactive){
        oldactive.classList.toggle("dot")
      }
      event.target.classList.toggle("active");


    }
  },
  data() {
    return {
      text: 'Led by preservation expert Santiago Relanzon, Azura’s team of digitization professionals can capture ultra high-resolution representations of any piece of physical art. With the help of state of the art camera equipment and lighting techniques, Azura can faithfully digitize paintings, sketches, photographs, film, and sculptures of all sizes without sacrificing the nuance and detail that lend them their emotional power.'

    }
  }

}

</script>

<style>

.title{
  font-family: "Work Sans";
  font-weight: bold;
  font-size: 30px;
}

.text{
  font-family: "Neuton";
  font-size: 25px;
  line-height: 25px;
  margin-top: 40px;
}

.dot1, .dot2, .dot3 {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 30px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active1, .active2, .active3, .dot1:hover, .dot2:hover, .dot3:hover {
  background-color: #717171;
}

.left{
  margin: 0px;
  float: left;
  top: 30vh;
  width: 10vw;
}

.right{
  position: absolute;

  top: 130vh;
  right: 0px;
}

.slide1container{
  width: 100vw;
}

</style>
