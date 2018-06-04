<template>
  <div class="app whole container">
    <div class="nav">
      <nav-bar/>
    </div>
    <div class="page align-center">
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
import DigiPres from './components/overview/DigiPres'
import provenance from './components/overview/provenance'

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
    BottomBar,
    DigiPres,
    provenance
  },
  data() {
    return {
    };
  },
};

</script>

<style>
html, body{
  margin: 0px;
  padding: 0px;
}

.nav{
  position: fixed;
  z-index: 2;
  top: 0;
}

.whole{
  padding: 0px;
  border: 0px;
  margin: 0px;
  width: 100%;
}



.page{
  margin: 0px;
  margin-right: 0px;
  border: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
