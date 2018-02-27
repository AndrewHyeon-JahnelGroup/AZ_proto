<template>
  <div class="team">
    <h1>Team</h1>
      <div class="container card-deck">
        <team-profile v-for="item in team"
                      v-bind:name="item.name" :about="item.about" :title="item.title" :email="item.email"/>
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
.container {
  margin: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap
}
</style>
