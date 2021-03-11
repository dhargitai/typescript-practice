import { Analyzer } from "./interfaces";
import { MatchData } from "./utils";

export class AverageAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const numberOfMatches = matches.filter((match) =>
      [match[1], match[2]].includes(this.team)
    ).length;
    let numberOfGivenGoals = 0;
    let numberOfTakenGoals = 0;

    for (let match of matches) {
      if (match[1] === this.team) {
        numberOfGivenGoals += match[3];
        numberOfTakenGoals += match[4];
      } else if (match[2] === this.team) {
        numberOfGivenGoals += match[4];
        numberOfTakenGoals += match[3];
      }
    }

    return `${this.team} in ${numberOfMatches} game(s) given ${(
      numberOfGivenGoals / numberOfMatches
    ).toFixed(2)} goals and taken ${(
      numberOfTakenGoals / numberOfMatches
    ).toFixed(2)} goals on average.`;
  }
}
