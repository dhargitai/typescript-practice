import fs from "fs";
import { MatchResult } from "./MatchResult";

type MatchData = [
  dateString: Date,
  homeTeam: string,
  awayTeam: string,
  homeScore: number,
  awayScore: number,
  match: MatchResult,
  x: string
];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf8" })
      .split("\n")
      .map((row: string) => {
        const [
          dateString,
          homeTeam,
          awayTeam,
          homeScoreString,
          awayScoreString,
          match,
          x,
        ] = row.split(",");

        const [day, month, year] = dateString.split("/");
        return [
          new Date(Date.parse(`${year}-${month}-${day}`)),
          homeTeam,
          awayTeam,
          Number.parseInt(homeScoreString),
          Number.parseInt(awayScoreString),
          match as MatchResult,
          x,
        ];
      });
  }
}
