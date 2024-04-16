export class Movie {
  constructor(
    public title: string,
    public description: string,
    public duration: number,
  ) {
    this.title = title;
    this.description = description;
    this.duration = duration;
  }
}
