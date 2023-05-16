import { Component, Input, OnInit } from '@angular/core';
import { JokeType } from '../../types/joke.type';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css'],
})
export class JokeCardComponent implements OnInit {
  @Input() jokeItem: JokeType | undefined;

  constructor() {}

  ngOnInit(): void {
  }
}
