<template>
  <div class="whole">
    <div class="nav">
      <nav-bar/>
    </div>
    <div class="page">
      <router-view />
    </div>
</div>

</template>

<script>
import FrontPage from './components/FrontPage'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import OurTeam from './components/OurTeam'
import ContactPage from './components/ContactPage'
import EmailModal from './components/EmailModal'
import TeamProfile from './components/TeamProfile'
import BottomBar from './components/BottomBar'

export default {
  name: 'App',
  components: {
    FrontPage,
    NavBar,
    AboutPage,
    OurTeam,
    ContactPage,
    EmailModal,
    TeamProfile,
    BottomBar
  },
  data() {
    return {
    };
  },
};

</script>

<style scoped>
body{
  width: auto;
  height: 100%
}
.whole{
  width: auto;
  background-size: contain;
  height: auto;
}

.top{
  background: white
}

.page{
  margin: 0px;
  margin-right: 0px;
  border: 0px;
  padding: 0px;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {

}
</style>
