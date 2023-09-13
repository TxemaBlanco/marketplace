import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
 
  private comicsUrl = 'http://localhost:8000/comics'; 
  private genresUrl = 'http://localhost:8000/genres'; 

  constructor(private http: HttpClient) { }

  getComics(): Observable<any[]> {
    return this.http.get<any[]>(this.comicsUrl)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }

  getGenres(): Observable<any[]> {
    return this.http.get<any[]>(this.genresUrl)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }
}