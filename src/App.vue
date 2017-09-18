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
        new Team('América-MG', require('./assets/img/america_mg_60x60.png')),
        new Team('Atlético-MG', require('./assets/img/atletico_mg_60x60.png')),
        new Team('Atlético-PR', require('./assets/img/atletico-pr_60x60.png')),
        new Team('Botafogo', require('./assets/img/botafogo_60x60.png'))
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

<style src="./assets/sass/app.scss" lang="sass"></style>
