<template>
    <div class="row">
      <div class="col-md-4">
        <md-dialog :md-active.sync="showDialog">
          <div class="contact-modal">
            <md-dialog-title>Contact Us</md-dialog-title>
              <email-form v-bind:mgData="mgData"/>
            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">Close</md-button>
              <md-button id="submit" class="md-primary" @click="showDialog = false; sendEmail()">Send</md-button>
            </md-dialog-actions>
          </div>
        </md-dialog>
      </div>

      <div class="col-md-4">
        <md-button class="md-primary md-raised" @click="showDialog = true">Contact Us</md-button>
      </div>

      <div class="col-md-4">
      </div>
    </div>
</template>

<script>
import EmailForm from './EmailForm'

export default {
    name: 'EmailModal',
    components: {
      EmailForm
    },
    data: () => (
      {
      showDialog: false,
      mgData: {
        name: '',
        from: '',
        number:'',
        subject: '',
        text: ''
      }

    }),
    methods: {
      sendEmail: async function sendEmail() {
        console.log(this.$data.mgData, 'workshere')
        var submit = document.getElementById('submit');
        var data = this.$data.mgData
        try  {
          await this.axios.post('/send', data)
        } catch (e) {
          console.log(e, 'error')
        }
      }


    }
  }
</script>

<style>
.contact-modal{
  padding: 20px;
}
.md-dialog {
  width: 30%;
}

.row{}
</style>
