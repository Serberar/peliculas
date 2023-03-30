import { Component } from '@angular/core';
import { movies } from '../seed/seed';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  movies = movies;
}
