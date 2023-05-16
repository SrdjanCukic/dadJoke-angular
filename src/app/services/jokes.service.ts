import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError, map } from 'rxjs';
import { JokeType } from '../types/joke.type';
import { dataSearchResponse } from '../types/JokesSearchResponse.type';


@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private dataUrl = 'https://icanhazdadjoke.com/';
  private dataUrlSearch = 'https://icanhazdadjoke.com/search';

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<JokeType>(this.dataUrl, this.httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getDataSearch(searchValue: string): Observable<JokeType[]> {
    return this.http
      .get<dataSearchResponse>(
        this.dataUrlSearch + `?term=${searchValue}`,
        this.httpOptions
      )
      .pipe(
        map((data) => data.results),
        tap((data) => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${errorMessage}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
