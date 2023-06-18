import { Component } from '@angular/core';
import { STORAGE_KEYS } from 'src/utils/constants';

@Component({
  selector: 'app-seen-jokes',
  templateUrl: './seen-jokes.component.html',
  styleUrls: ['./seen-jokes.component.css'],
})
export class SeenJokesComponent {
  seenJokes: any = [];
  condition: boolean = false;
  toastCondition: boolean = false;

  constructor() {}

  getSeenJokes() {
    const storedJokes = localStorage.getItem(STORAGE_KEYS.seenJokes);
    if (storedJokes) {
      this.seenJokes = JSON.parse(storedJokes);
      this.condition = true;
      return this.seenJokes;
    }
  }

  clearSeenJokes() {
    localStorage.clear();
    this.seenJokes = [];
    this.condition = false;
    this.toast();
  }

  ngOnInit(): void {
    this.getSeenJokes();
  }

  toast() {    
    this.toastCondition = true;
    setTimeout(() =>{
      this.toastCondition =false;
    }, 2000);
  }
}
