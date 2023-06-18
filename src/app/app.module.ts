import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JokeListComponent } from './components/jokes-list/jokes-list.component';
import { JokeCardComponent } from './components/joke-card/joke-card.component';
import { RandomJokeComponent } from './components/random-joke/random-joke.component';
import { SearchJokesComponent } from './components/search-jokes/search-jokes.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SeenJokesComponent } from './components/seen-jokes/seen-jokes.component';
import { HomeComponent } from './components/home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeCardComponent,
    RandomJokeComponent,
    SearchJokesComponent,
    LayoutComponent,
    SeenJokesComponent,
    HomeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
