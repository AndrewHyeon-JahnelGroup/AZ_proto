<template>

  <div class="container">
    <div class="row center-align">

      <div class="left col-md-4">

        <div class="title">
          <h4>Provenance Authentication and Security</h4>
        </div>

        <div class="text">
          <p> {{text}}</p>
        </div>
      </div>

    </div>
  </div>



</template>

<script>
export default {
  name: 'Provenance',
  data() {
    return {
      text: 'Using blockchain, Azura can issue permanent [and unalterable] certificates of authenticity for any work in its registry. The application of distributed ledger and image recognition technology virtually eliminates the risk of fraudulent activity in the forms of forgery and misrepresentation.'
    }
  }

}

</script>

<style>
.container{
  margin: 0px;
  padding: 0px;
}

.left{
  margin: 15vh;
}
</style>
