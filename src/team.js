export default class Team {
  constructor(name, shield) {
    this.name = name;
    this.shield = shield;

    this.points = 0;
    this.goalsScored = 0;
    this.goalsConceded = 0;
  }

  updateInfo(points, goalsScored, goalsConceded) {
    this.points += points;
    this.goalsScored += goalsScored;
    this.goalsConceded += goalsConceded;
  }

  endGame(adversaryTeam, goals, goalsAdversary) {
    if (goals === goalsAdversary) {
      this.updateInfo(1, goals, goalsAdversary);
      adversaryTeam.updateInfo(1, goalsAdversary, goals);
    } else {
      if (goals > goalsAdversary) {
        this.updateInfo(3, goals, goalsAdversary);
        adversaryTeam.updateInfo(0, goalsAdversary, goals);
      } else {
        this.updateInfo(3, goals, goalsAdversary);
        adversaryTeam.updateInfo(3, goals, goalsAdversary);
      }
    }
  }
}
