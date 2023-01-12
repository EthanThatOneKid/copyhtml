export class IntegerRange {
  public readonly start: number;
  public readonly end: number;

  constructor(start: number, end = start) {
    this.start = Math.min(start, end);
    this.end = Math.max(start, end);
  }

  public static fromString(input: string): IntegerRange {
    const [start, end] = input.split("-").map((s) => parseInt(s));
    return new IntegerRange(start, end);
  }
}
