<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{team.name}} <img :src="team.shield">
    {{team1.name}} <img :src="team1.shield">
  </div>
</template>

<script>
import Team from './team';

export default {
  name: 'app',
  data() {
    return {
      team: new Team('América-MG', require('./assets/america_mg_60x60.png')),
      team1: new Team('América-MG', require('./assets/atletico_mg_60x60.png'))
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
