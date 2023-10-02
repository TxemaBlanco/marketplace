import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from 'src/app/models/Comic'; 
import { Genre } from '../../../models/Genre';

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {
  comic: Comic = {
    isbn: '',
    title: '',
    author: '',
    ishardcover: false,
    photo: '',
    price: 0,
    synopsis: '',
    stock: 0,
    genres: [],
    isEditing: undefined
  };
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicService: ComicService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isbn = params['isbn'];
      if (isbn) {
        this.loadComic(isbn);
      }
    });
  }

  loadComic(isbn: string): void {
    this.isLoading = true;
    this.isError = false;

    this.comicService.getComicByISBN(isbn).subscribe(
      (comic) => {
        this.comic = comic;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener el cómic:', error);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }

  updateComic(): void {
    this.isLoading = true;
    this.isError = false;

    this.comicService.updateComic(this.comic.isbn, this.comic).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/comic', this.comic.isbn]);
      },
      (error) => {
        console.error('Error al actualizar el cómic:', error);
        this.isLoading = false;
        this.isError = true;
      }
    );
  }
}
