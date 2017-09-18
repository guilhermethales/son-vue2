<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p :id="numberInteger">{{ title }}</p>
    <a :href="link">Teste</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Este é um título teste',
      numberInteger: 10,
      link: 'http://localhost:8080'
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
