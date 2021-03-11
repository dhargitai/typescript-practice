import { DataReader } from "./interfaces";
import { dateStringToDate, MatchData, MatchResult } from "./utils";

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]) => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        Number.parseInt(row[3]),
        Number.parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
