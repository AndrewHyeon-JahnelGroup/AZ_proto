<template>
  <div class="col-md-6 card-deck">
  <div class="card right align">
    <h5 class="card-header">{{name}}</h5>
    <div class="card-body">
      <div class="card-text container">
        <div class="col-md-6">
          <p>image goes here</p>
        </div>
        <div class="col-md-6">

          <p class="title">{{title}}</p>

          <p>{{about}}</p>
          <p>{{email}}</p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'TeamProfile',
  props: ['name', 'about', 'title', 'email'],
  methods: {
    sendEmail: async function sendEmail() {
      var data = this.$data.mgData
      try  {
        await this.axios.post('/send', data)
      } catch (e) {
        console.log(e, 'error')
      }
    }

  },
  data () {

    return {
    }
  }
}
</script>

<style>
/* Three columns side by side */
.container {
  display: flex;
}
.name {
  width: auto;
  position: absolute;
  height: inherit;
  color: #D5D5D5;
  padding-left: 10px
}
.namebar {
  background-color: #6D7993;
  width: 100%;
  height: inherit;
}
.card {
  margin: 10px;
}
.button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
}

.button:hover {
    background-color: #555;
}
</style>
