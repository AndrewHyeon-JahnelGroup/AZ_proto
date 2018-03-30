<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 contactus">
        <h6>{{msg}}</h6>
        <p>{{content}}</p>
        <div>
          <email-modal class="text-center"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailModal from './EmailModal'

export default {
  name: 'ContactPage',
  components: {
    EmailModal
  },
  data () {
    return {
      msg: 'Contact Us',
      content: 'Azura is currently working with museums, private collectors and universities across the United States to help preserve and integrate their collections into the Azura platform. Partnered institutions, artists and collectors have access to their Azura art & provenance database as well as their storage and digitized marketplace storefronts. To receive more information about joining the Azura platform, please send us a message here.'
    }
  }
}
</script>

<style>
.contactus {
  width: 50%;
  top: 100px;
  text-align: center
}
</style>
