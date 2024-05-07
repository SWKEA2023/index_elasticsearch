import { Hall } from './hall.entity';
import { Movie } from './movie.entity';

export class Screening {
  constructor(
    public screeningId: number,
    public hall: Hall,
    public movie: Movie,
    public date: string,
    public startTime: any,
    public endTime: any,
    public createdAt: string,
  ) {}
}
