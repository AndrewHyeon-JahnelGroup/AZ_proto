<template>
  <div class="navcontainer">
    <div class="container">
      <div class="row navrow">
        <div class="col-md-4">
          <h1>Azura</h1>
        </div>
        <div class="navbar col-md-4">
          <md-tabs class="md-transparent" md-sync-route>
            <md-tab class="md-transparent" id="tab-home" md-label="Overview" to="/"></md-tab>
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
  background-color: rgba(0,0,0,0)

}

.navbar {
  position: absolute;
  float: right;
  right: 50px;
  margin: 0px;
  padding: 0px;
  background-color: rgba(0,0,0,0)
}

#tab-home{
  background-color: rgba(0,0,0,0)
}

.navcontainer{
  padding: 0px;
  margin: 0px;
  width: 100%;
}
</style>
