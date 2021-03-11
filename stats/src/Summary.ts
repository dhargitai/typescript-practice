import { Analyzer, OutputTarget } from "./interfaces";
import { MatchData } from "./utils";

export class Summary {
  constructor(public analyzer: Analyzer, public reporter: OutputTarget) {}

  buildAndPrintReport(data: MatchData[]) {
    this.reporter.print(this.analyzer.run(data));
  }
}
