<template>
  <div class="aboutpage md-alignment-center-center">
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
        </div>
        <div class="col-sm-7">
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Provenance from './overview/provenance'
import DigiPres from './overview/DigiPres'

export default {
  name: 'AboutPage',
  components: {
    Carousel,
    Slide,
    Provenance,
    DigiPres
  },
  methods: {
    showSlides: function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    },
    currentSlide: function currentSlide(n) {
      this.showSlides(slideIndex = n);
    }
  },
  data () {
    return {
      msg: 'About',
    }
  }
}
</script>

<style scoped>

body{
  width: 100%;
  height: 100%;

}

.aboutpage {
  height: 100;
  overflow: scroll;
}

#top {
  width: 100%;
  max-height: 100vh;
  position: relative;
  z-index: 1;
  /* Preserve aspet ratio */

}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.text{
  position: absolute;
  font-size: 40px;
  color: white;
  z-index: 2;
  left: 38vw;
  top: 50vh;
}

.abt {
  text-align: center
}

.slide {
  height: 100vh;
  width: auto;
}

#about {
  width: 100%;
  text-align: center;
}

.digipres{
  width: 100%;
}

</style>
