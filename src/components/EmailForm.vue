<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
       v-model="mgData.name"
       :rules="nameRules"
       :counter="10"
       label="Name"
       required
     ></v-text-field>
     <v-text-field
       v-model="mgData.from"
       :rules="emailRules"
       label="E-mail"
       required
     ></v-text-field>
     <v-select
       v-model="select"
       :items="items"
       :rules="[v => !!v || 'Item is required']"
       label="Item"
       required
     ></v-select>

     <v-btn
      :disabled="!valid"
      @click="submit"
      ></v-btn>
    </v-form>

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
