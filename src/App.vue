<template>
  <div>
    <div class="row fixed-top top md-elevation-3" id="app">
      <div class="md-col-1 logo">
        <img id="logo" src="./assets/logo.png">
      </div>
      <div class="md-col-6 nav">
        <nav-bar/>
      </div>
      <div>
      </div>
    </div>
    <div class="container page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <router-view />
    </div>
    <div>
      <bottom-bar class="fixed-bottom"/>
    </div>
  </div>
</template>

<script>
import FrontPage from './components/FrontPage'
import TodoList from './components/toDoList'
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
    TodoList,
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

<style>
.top{
  background: white
}

.page{
  top: 30px
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  height: 100px;
}
#stock {
  width: 100%;
}

.logo {
  margin-left: 20px;
  padding: 10px;
  background-color: white
}

.nav {
  vertical-align: bottom;
  padding-top: 60px
}
</style>
