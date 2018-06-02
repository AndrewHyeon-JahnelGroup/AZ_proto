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

</style>
