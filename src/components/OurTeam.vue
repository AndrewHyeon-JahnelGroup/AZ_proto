<template>
  <div class="teampage container">
    <div class="col-md-6">
      <h4>About Us</h4>
      
    </div>
    <div class="col-md-6">
    </div>
  </div>
</template>

<script>
import TeamProfile from './TeamProfile'

export default {
  name: 'TeamPage',
  components: {
    TeamProfile
  },
  data () {
    return {
      team: []
    }
  }
}
</script>
<style scoped>
.team {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%
}

</style>
