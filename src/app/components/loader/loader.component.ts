import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoaderComponent {
  
  loading!:boolean;

  constructor(private loader: LoaderService) {
    this.loader.isLoading$.subscribe({
      next: value => this.loading = value
    });}
}
