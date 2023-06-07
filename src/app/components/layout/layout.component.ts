import { Component, HostListener } from '@angular/core';
import {
  faShuffle,
  faMagnifyingGlass,
  faSnowplow,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  faShuffle = faShuffle;
  faMagnifyingGlass = faMagnifyingGlass;
  faSnowplow = faSnowplow;
  faHome = faHome;
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(): void {
    if(window.scrollY > 50) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    };
  };
}
