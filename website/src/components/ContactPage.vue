<template>
  <div class="col contact">
    <p>{{content}}</p>
    <div>
      <email-modal class="text-center"/>
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

<style scoped>
.contact {
  margin: 25px;
  text-align: center
}
</style>
