import fs from "fs";

export abstract class CsvFileReader<RowType> {
  data: RowType[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): RowType;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf8" })
      .split("\n")
      .map((row) => row.split(","))
      .map(this.mapRow);
  }
}
