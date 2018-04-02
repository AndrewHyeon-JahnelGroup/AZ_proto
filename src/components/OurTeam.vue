<template>
  <div class="teampage container">
    <div class="row">
      <div class="col-1">
      </div>
      <div class="team col-4">
        <h4>About Us</h4>
        <br />
        <br />
        <p>{{content}}</p>
      </div>
      <div class="col-1">
      </div>
      <div class="col-6 aboutpic">
        <img src="../assets/aboutus.jpg">
      </div>
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
      team: [],
      content: 'Founded in 2018, Azura is a Los Angeles based company with offices in New York and Spain. It’s team includes some of the art world’s most forward-thinking visionaries as well as a growing roster of highly revered contemporary artists. ',

    }
  }
}
</script>
<style scoped>
.team {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  top: 30vh;
}

.teampage {
  height: 100vh
}

.aboutpic {
  top: 15vh;
}

</style>
