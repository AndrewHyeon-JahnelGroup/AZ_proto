<template>
  <div class="navcontainer">
    <div class="container center-align">
      <div class="row navrow">
        <div class="logo col-md-4">
          <img src="./../assets/logo_azura_gold.png">
        </div>
        <div class="navbar text-center center-align col-md-4">
          <md-tabs class="md-transparent text-center" md-sync-route>
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

img{
  margin-left: 50px;
  height: 40%;
}

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
  right: 50px;
  margin: 0px;
  padding: 0px;
  background-color: rgba(0,0,0,0)
}

#tab-home{
  background-color: rgba(0,0,0,0)
}

.navcontainer{
  position: fixed;
  padding: 0px;
  margin: 0px;
  margin-top: 30px;
  width: 100%;
}
</style>
