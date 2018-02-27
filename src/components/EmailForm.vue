<template>
  <div>
    <md-field>
     <label>Name</label>
     <md-input v-model="mgData.name"></md-input>
    </md-field>

    <md-field>
     <label>Your Email</label>
     <md-input v-model="mgData.from"></md-input>
    </md-field>

    <md-field>
     <label>Phone Number</label>
     <md-input v-model="mgData.number"></md-input>
    </md-field>

    <md-field>
     <label>Subject</label>
     <md-input v-model="mgData.subject"></md-input>
    </md-field>
    <md-field>
     <label>Message</label>
     <md-textarea v-model="mgData.text"></md-textarea>
    </md-field>
  </div>
</template>

<script>

export default {
  name: 'EmailForm',
  props: ['mgData'],
  data: () => ({
   })
}
</script>

<style>
  .md-input {
    border: 1px;
  }
</style>
