import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchJokesComponent } from './components/search-jokes/search-jokes.component';
import { RandomJokeComponent } from './components/random-joke/random-joke.component';
import { SeenJokesComponent } from './components/seen-jokes/seen-jokes.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search', component: SearchJokesComponent },
      { path: 'random', component: RandomJokeComponent },
      { path: 'seen', component: SeenJokesComponent },
      // { path: '', redirectTo: '/home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
