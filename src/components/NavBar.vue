<template>
  <div class="navcontainer">
    <div class="container">
      <div class="row navrow">
        <div class="col-md-4">
          <h1>Azura</h1>
        </div>
        <div class="navbar col-md-8">
          <md-tabs md-sync-route>
            <md-tab id="tab-home" md-label="Overview" to="/"></md-tab>
            <md-tab id="tab-pages" md-label="The Azura Platform" to="/about"></md-tab>
            <md-tab id="tab-posts" md-label="About Us" to="/team"></md-tab>
            <md-tab id="tab-settings" md-label="Contact" to="/contact"></md-tab>
          </md-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'NavBar'
}
</script>

<style scoped>

.navrow{
  width: 100vh;
}

.container{
  margin: 0px;
  padding: 0px;
}

.navbar {
  position: absolute;
  float: right;
  right: 0px;
}

.navcontainer{
  padding: 0px;
  margin: 0px;
  width: 100%;
}
</style>
