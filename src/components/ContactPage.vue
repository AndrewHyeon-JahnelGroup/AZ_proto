<template>

  <!-- <div class="container">
    <div class="row contactcont">
      <div class="wholebox">
        <div class="col-sm-4 contactText">
          <h6>{{msg}}</h6>
          <p>{{content}}</p>
        </div>
        <div class="col-sm-4 emailForm">
          <email-form v-bind:mgData="mgData"/>
        </div>
      </div>
    </div>
  </div> -->

    <v-layout row wrap class="contactText">
      <v-flex xs3 offset-xs6>
        <v-card>
          <h6>{{msg}}</h6>
          <p>{{content}}</p>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <email-form v-bind:mgData="mgData" />
      </v-flex>
    </v-layout>
</template>

<script>
import EmailModal from './EmailModal'
import EmailForm from './EmailForm'

export default {
  name: 'ContactPage',
  components: {
    EmailModal,
    EmailForm
  },
  data () {
    return {
      msg: 'Contact Us',
      content: 'Azura is currently working with museums, private collectors and universities across the United States to help preserve and integrate their collections into the Azura platform. Partnered institutions, artists and collectors have access to their Azura art & provenance database as well as their storage and digitized marketplace storefronts. To receive more information about joining the Azura platform, please send us a message here.',
      mgData: {
        name: '',
        from: '',
        number:'',
        subject: '',
        text: ''
      }
    }
  }
}
</script>

<style>

.contactcont {
  margin-top: 0px;
  text-align: center;

}

.contactText {
  border-right: 2px black;
  /* padding-top: 150px; */

}

</style>
