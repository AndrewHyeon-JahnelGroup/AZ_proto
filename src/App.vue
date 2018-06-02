<template>
  <div class="whole">
    <div class="nav">
      <nav-bar/>
    </div>
    <v-content>
      <v-container fluid>
        <div class="page">
          <router-view />
        </div>
      </v-container>
    </v-content>
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
.nav{
  position: fixed;
  z-index: 2;
  margin: 10px;
  margin-top: 0px;
  width: 100%;
}
body{
  width: auto;
  height: 100%
}
.whole{
  width: auto;
  background-size: contain;
  height: auto;
  background-color: rgba(0,0,0,0);
  margin: 0px;

}

.top{
  background: white
}

/* .page{
  margin: 0px;
  margin-right: 0px;
  border: 0px;
  padding: 0px;
  width: 100%;
  z-index: 1;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
