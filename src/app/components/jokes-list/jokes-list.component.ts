import { Component, Input, OnInit } from '@angular/core';
import { JokeType } from 'src/app/types/joke.type';


@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css'],
})
export class JokeListComponent implements OnInit {
 
  @Input() jokes: JokeType[] | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.jokes);
  }
}
