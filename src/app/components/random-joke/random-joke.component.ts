import { Component } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { JokeType } from 'src/app/types/joke.type';
import { STORAGE_KEYS } from 'src/utils/constants';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css'],
})
export class RandomJokeComponent {
  randomJoke: JokeType | undefined;
  seenJokesArray: JokeType[] = [];
  errorMessage = '';

  set seenJokes(jokeItems: JokeType[]) {
    localStorage.setItem(STORAGE_KEYS.seenJokes, JSON.stringify(jokeItems));
    this.seenJokesArray = jokeItems;
  }
  get seenJokes() {
    const storedJokes = localStorage.getItem(STORAGE_KEYS.seenJokes);
    if (storedJokes) {
      const parsedStoredJokes = JSON.parse(storedJokes)!;
      return parsedStoredJokes;
    }
    return this.seenJokesArray;
  }

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.onRandomClick();
  };

  onRandomClick() {
    this.jokesService.getData().subscribe({
      next: (joke) => {
        this.randomJoke = joke;
        this.avoidSeenJokes(
          joke.id,
          this.seenJokes.map((joke) => joke.id)
        );
        this.seenJokes = [...this.seenJokes, joke];
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  avoidSeenJokes(jokeId: string, seenJokesIds: Array<string>): void {
    let exists = seenJokesIds.includes(jokeId);
    if (exists) {
      this.onRandomClick();
    } else {
      return;
    }
  }

  clearSeenJokes() {
    this.seenJokes = [];
  }
}
