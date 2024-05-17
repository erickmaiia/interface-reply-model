export interface HistoryItem {
  date: string;
  sentiment: "positive" | "neutral" | "negative";
  text: string;
}
