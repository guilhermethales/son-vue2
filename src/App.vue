<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li v-for="team in teams">
        {{ team.name }} <img :src="team.shield">
      </li>
      <li v-for="(value, key, index) in alfabeto">
        {{ index }} - {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import Team from './team';

export default {
  name: 'app',
  data() {
    return {
      teams: [
        new Team('América-MG', require('./assets/america_mg_60x60.png')),
        new Team('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
        new Team('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
        new Team('Botafogo', require('./assets/botafogo_60x60.png'))
      ],
      alfabeto: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      }
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
