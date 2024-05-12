import { Injectable } from '@angular/core';
import { MOVIES } from '../../data/movies';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): MovieModel[] {
    return MOVIES;
  }
}
