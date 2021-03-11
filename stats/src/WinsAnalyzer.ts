import { Analyzer } from "./interfaces";
import { MatchData, MatchResult } from "./utils";

export class WinsAnalyzer implements Analyzer {
  constructor(public team?: string) {}

  run(matches: MatchData[]): string {
    let teamWins: { [teamName: string]: number } = {};

    for (let match of matches) {
      if (match[5] === MatchResult.HomeWin) {
        teamWins[match[1]] = (teamWins[match[1]] || 0) + 1;
      } else if (match[5] === MatchResult.AwayWin) {
        teamWins[match[2]] = (teamWins[match[2]] || 0) + 1;
      }
    }

    if (this.team) {
      return `${this.team} won ${teamWins[this.team]} times.`;
    }

    return Object.keys(teamWins)
      .map((teamName) => `${teamName} won ${teamWins[teamName]} times.`)
      .join("\n");
  }
}
