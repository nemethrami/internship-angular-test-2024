import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  movieService: MovieService = new MovieService();
  movies: MovieModel[] = this.movieService.getMovies();
  currentMovie: MovieModel = {id: 0, year: 0, rating: 0, title: '', thumbnail: ''};
  inputValue: string = '';
  sortBy: string = 'id';
  sortOrder: string = 'asc';
  sortOrderButtonClass: string = 'bi bi-sort-down';

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortOrderButtonClass = this.sortOrder === 'asc' ? 'bi bi-sort-down' : 'bi bi-sort-up'
    this.sortData();
  }

  sortData(): void {
    let sortType: string = this.sortBy;
    let order: string = this.sortOrder;
    this.movies = this.movies.sort((a: MovieModel, b: MovieModel) => {
      if (order === 'asc') {
        if (sortType === 'year') {
          return a.year - b.year;
        }
        if (sortType === 'rating') {
          return a.rating - b.rating
        }
        if (sortType === 'title') {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
        }
      }
      else {
        if (sortType === 'year') {
          return b.year - a.year;
        }
        if (sortType === 'rating') {
          return b.rating - a.rating
        }
        if (sortType === 'title') {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
        }
      }
      return 0;
    })
  }

  handleDeleteClick(id: number): void {
    this.movies = this.movies.filter((movie) => movie.id !== id)
  }

  openModal(movie: MovieModel): void {
    const modal = document.getElementById('exampleModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
    this.currentMovie = movie;
    this.inputValue = movie.title;
  }

  closeModal(): void {
    const modal = document.getElementById('exampleModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  handleEditClick(): void {
    this.currentMovie.title = this.inputValue;
    this.closeModal();
  }

}
