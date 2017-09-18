export default class Team {
  constructor(name, shield) {
    this.name = name;
    this.shield = shield;

    this.points = 0;
    this.goalsScored = 0;
    this.goalsConceded = 0;
  }
}
