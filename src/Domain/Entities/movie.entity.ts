export class Movie {
    constructor(
      public movieId: number,
      public title: string,
      public duration: number,
      public director: string,
      public year: number,
      public language: string,
      public pegi: number,
      public imageURL: string,
      public trailerURL: string
    ) {}
  }