import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./utils";

const csvReader = new CsvFileReader("assets/football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

console.log(matchReader.matches);

let teamWins = 0;
const team = "Liverpool";
const wonAtHome = (match, team) =>
  match[1] === team && match[5] === MatchResult.HomeWin;
const wonAtAway = (match, team) =>
  match[2] === team && match[5] === MatchResult.AwayWin;

for (let match of matchReader.matches) {
  if (wonAtHome(match, team) || wonAtAway(match, team)) {
    teamWins++;
  }
}

console.log(team, "won", teamWins, "times");
