<template>

  <div class="container">
    <div class="row center-align">

      <div class="left col-md-4">

        <div class="title">
          <h4>Digitization and Preservation</h4>
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
  data() {
    return {
      text: 'Led by preservation expert Santiago Relanzon, Azura’s team of digitization professionals can capture ultra high-resolution representations of any piece of physical art. With the help of state of the art camera equipment and lighting techniques, Azura can faithfully digitize paintings, sketches, photographs, film, and sculptures of all sizes without sacrificing the nuance and detail that lend them their emotional power.'

    }
  }

}

</script>

<style>
.container{
  padding: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
}

.left{
  /* margin: 15vh; */
}

.img{
  max-width:100%;
}
</style>
