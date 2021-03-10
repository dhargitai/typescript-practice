export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/");
  return new Date(Date.parse(`${year}-${month}-${day}`));
};

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
