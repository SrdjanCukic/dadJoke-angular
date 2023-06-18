import { Component, HostListener } from '@angular/core';
import {
  faShuffle,
  faMagnifyingGlass,
  faClockRotateLeft,
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
  faClockRotateLeft = faClockRotateLeft;
  faHome = faHome;
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(): void {
    if (window.scrollY > 50) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
