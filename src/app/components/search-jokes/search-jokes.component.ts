import { Component } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { JokeType } from 'src/app/types/joke.type';

@Component({
  selector: 'app-search-jokes',
  templateUrl: './search-jokes.component.html',
  styleUrls: ['./search-jokes.component.css'],
})
export class SearchJokesComponent {
  searchResults: JokeType[] = [];
  searchValue = '';
  errorMessage = '';

  constructor(private jokesService: JokesService) {}

  onSearchClick() {
    this.jokesService.getDataSearch(this.searchValue).subscribe({
      next: (jokes) => {
        this.searchResults = jokes;
        console.log(jokes);
      },
      error: (err) => (this.errorMessage = err),
    });
  };
}
