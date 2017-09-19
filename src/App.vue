<template>
  <div id="app" class="container">
    <div class="row">
      <h3>Campeonato Brasileiro - Série A - 2016</h3>
       <a class="btn btn-primary" @click.prevent="createGame">Novo jogo</a>
       <a class="btn btn-info" @click.prevent="orderTable">Ordernar Tabela</a>
      <br><br>
      <div v-if="view === 'table'">
        <table class="table table-striped">
          <thead>
            <th v-for="column of columns">
              <a href="#" @click.prevent="sortBy(column)">{{ column | ucwords }}</a>
            </th>
          </thead>

          <tbody>
            <tr v-for="team in teamsFiltered">
              <td>
                <img :src="team.shield" style="height: 30px; width: 30px;">
                <strong>{{ team.name }}</strong>
              </td>
              <td>{{ team.points }}</td>
              <td>{{ team.goalsScored }}</td>
              <td>{{ team.goalsConceded }}</td>
              <td>{{ team | balance }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="view === 'newGame'">
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" v-model="newGame.home.goals">
            <label class="control-label">
              {{ newGame.home.team.name }}
              <img :src="newGame.home.team.shield" style="height: 30px; width: 30px;">
            </label>
          </div>
          <span>X</span>
          <div class="form-group">
            <label class="control-label">
              <img :src="newGame.outside.team.shield" style="height: 30px; width: 30px;">
              {{ newGame.outside.team.name }}
            </label>
            <input type="text" class="form-control" v-model="newGame.outside.goals">
          </div>
          <button type="button" class="btn btn-primary" @click="endGame()">Fim de jogo</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Team from './team';

export default {
  name: 'app',
  data() {
    return {
      order: {
        keys: ['points', 'goalsScored', 'goalsConceded'],
        sort: ['desc', 'desc', 'asc']
      },
      columns: ['nome', 'pontos', 'gf', 'gs', 'saldo'],
      teams: [
        new Team('América-MG', require('./assets/img/america_mg_60x60.png')),
        new Team('Atlético-MG', require('./assets/img/atletico_mg_60x60.png')),
        new Team('Atlético-PR', require('./assets/img/atletico-pr_60x60.png')),
        new Team('Botafogo', require('./assets/img/botafogo_60x60.png')),
        new Team('Chapecoense', require('./assets/img/chapecoense_60x60.png')),
        new Team('Corinthians', require('./assets/img/corinthians_60x60.png')),
        new Team('Coritiba', require('./assets/img/coritiba_60x60.png')),
        new Team('Cruzeiro', require('./assets/img/cruzeiro_60x60.png')),
        new Team('Figueirense', require('./assets/img/figueirense_60x60.png')),
        new Team('Flamengo', require('./assets/img/flamengo_60x60.png')),
        new Team('Fluminense', require('./assets/img/fluminense_60x60.png')),
        new Team('Gremio', require('./assets/img/gremio_60x60.png')),
        new Team('Internacional', require('./assets/img/internacional_60x60.png')),
        new Team('Palmeiras', require('./assets/img/palmeiras_60x60.png')),
        new Team('Ponte Preta', require('./assets/img/ponte_preta_60x60.png')),
        new Team('Santa Cruz', require('./assets/img/santa_cruz_60x60.png')),
        new Team('Santos', require('./assets/img/santos_60x60.png')),
        new Team('São Paulo', require('./assets/img/sao_paulo_60x60.png')),
        new Team('Sport', require('./assets/img/sport_60x60.png')),
        new Team('Vitória', require('./assets/img/vitoria_60x60.png'))
      ],
      newGame: {
        home: {
          team: null,
          goals: 0
        },
        outside: {
          team: null,
          goals: 0
        }
      },
      view: 'table'
    };
  },
  methods: {
    endGame() {
      const adversaryTeam = this.newGame.outside.team;
      const goalsHome = +this.newGame.home.goals;
      const goalsOutside = +this.newGame.outside.goals;
      this.newGame.home.team.endGame(adversaryTeam, goalsHome, goalsOutside);
      this.showView('table');
    },
    createGame() {
      const indexHome = Math.floor(Math.random() * 20);
      const indexOutside = Math.floor(Math.random() * 20);

      this.newGame.home.team = this.teams[indexHome];
      this.newGame.home.gols = 0;
      this.newGame.outside.team = this.teams[indexOutside];
      this.newGame.outside.gols = 0;
      this.showView('newGame');
    },
    showView(view) {
      this.view = view;
    },
    sortBy(column) {
      this.order.keys = column;
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
    },
    orderTable() {
      const teams = this.teams;
      for (const team in teams) {
        if (teams[team].points < teams[+team + 1].points) {
          let aux = teams[team];
          this.teams[team] = teams[+team + 1];
          this.teams[+team + 1] = aux;
          aux = null;
        }
        break;
      }
    }
  },
  computed: {
    teamsFiltered() {
      return _.orderBy(this.teams, this.order.keys, this.order.sort);
    }
  },
  filters: {
    balance(team) {
      return team.goalsScored - team.goalsConceded;
    },
    ucwords(value) {
      if (value.length === 2) {
        return value.toUpperCase();
      }

      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style src="./assets/sass/app.scss" lang="sass"></style>
