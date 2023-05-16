import { Component } from '@angular/core';
import { STORAGE_KEYS } from 'src/utils/constants';

@Component({
  selector: 'app-seen-jokes',
  templateUrl: './seen-jokes.component.html',
  styleUrls: ['./seen-jokes.component.css'],
})
export class SeenJokesComponent {
  seenJokes: any = [];
  getSeenJokes() {
    const storedJokes = localStorage.getItem(STORAGE_KEYS.seenJokes);
    if (storedJokes) {
      this.seenJokes = JSON.parse(storedJokes);
      return this.seenJokes;
    }
  }

  clearSeenJokes() {
    localStorage.clear();
    this.seenJokes = [];
  }

  ngOnInit(): void {
    this.getSeenJokes();
    console.log(this.seenJokes);
  }
}
