<template>
  <div class="aboutpage md-alignment-center-center">
      <div class="row">
        <div class="col-sm-9">
          <p>dsafdafdsa</p>
        </div>
        <div class="col-sm-7">
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

.aboutpage{
  position: absolute;
  top: 110px;
}

</style>
