import { AverageAnalyzer } from "./AverageAnalyzer";
import { ConsoleReport } from "./ConsoleReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalyzer } from "./WinsAnalyzer";

const csvReader = new CsvFileReader("assets/football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalyzer(), new ConsoleReport());

// summary.buildAndPrintReport(matchReader.matches);

const liverpoolSummary = new Summary(
  new WinsAnalyzer("Liverpool"),
  new ConsoleReport()
);
liverpoolSummary.buildAndPrintReport(matchReader.matches);

const liverpoolAvergageGoalSummary = new Summary(
  new AverageAnalyzer("Liverpool"),
  new ConsoleReport()
);
liverpoolAvergageGoalSummary.buildAndPrintReport(matchReader.matches);
