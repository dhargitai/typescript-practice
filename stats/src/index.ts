import { MatchReader } from "./MatchReader";
import { MatchResult } from "./utils";

const reader = new MatchReader("assets/football.csv");
reader.read();

console.log(reader.data);

let teamWins = 0;
const team = "Liverpool";
const wonAtHome = (match, team) =>
  match[1] === team && match[5] === MatchResult.HomeWin;
const wonAtAway = (match, team) =>
  match[2] === team && match[5] === MatchResult.AwayWin;

for (let match of reader.data) {
  if (wonAtHome(match, team) || wonAtAway(match, team)) {
    teamWins++;
  }
}

console.log(team, "won", teamWins, "times");
