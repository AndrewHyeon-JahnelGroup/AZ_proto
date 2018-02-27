<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h1>Azura</h1>
      </div>
      <div class="col-md-8">
        <md-tabs md-sync-route>
          <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
          <md-tab id="tab-pages" md-label="About" to="/about"></md-tab>
          <md-tab id="tab-posts" md-label="Our Team" to="/team"></md-tab>
          <md-tab id="tab-settings" md-label="Contact" to="/contact"></md-tab>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'NavBar'
}
</script>

<style>
.navbar {
  position: sticky;
}
</style>
