<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{team}}
  </div>
</template>

<script>
import Team from './team';

export default {
  name: 'app',
  data() {
    return {
      team: new Team('Atlético-MG', 'value')
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
