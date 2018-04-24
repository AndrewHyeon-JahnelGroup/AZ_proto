<template>
  <div class="aboutpage md-alignment-center-center">
    <img id="top" src="../assets/img_2.jpg">
    <div class="text">
      <p class="md-alignment-center-center"> <b>The Azura Platform</b> </p>
      <div style="text-align:center">
        <span class="dot" @click.stop="currentSlide(1)"></span>
        <span class="dot" @click.stop="currentSlide(2)"></span>
        <span class="dot" @click.stop="currentSlide(3)"></span>
      </div>
    </div>
    <div class="slide md-alignment-center-center">
      <digi-pres />
    </div>
    <div class="slide md-alignment-center-center">
      <provenance />
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
  margin: 0 2px;
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
}

#about {
  width: 100%;
  text-align: center;
}

</style>
