import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Comic } from '../models/Comic';
import { of } from 'rxjs';
import { Genre } from '../models/Genre';
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics: Comic[] = [];
  private comicsUrl = 'http://localhost:8000/comics'; 
  private genresUrl = 'http://localhost:8000/genres'; 
  private genres: Genre[] = [];
  constructor(private http: HttpClient) { 
    this.getGenres().subscribe(
      (genres: Genre[]) => {
        this.genres = genres;
      },
      (error) => {
        console.error('Error al obtener la lista de géneros:', error);
      }
    );
  }

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
  getComicByISBN(isbn: string): Observable<Comic> {
    return this.http.get<Comic>(`${this.comicsUrl}/${isbn}`);
  }
  
  searchComics(searchTerm: string): Observable<any[]> {
    const url = `${this.comicsUrl}/buscar-comics?search=${searchTerm}`; 

    return this.http.get<any[]>(`${this.comicsUrl}`);
  }
}