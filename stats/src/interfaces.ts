import { MatchData } from "./utils";

export interface DataReader {
  data: string[][];
  read(): void;
}

export interface Analyzer {
  run(data: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}
