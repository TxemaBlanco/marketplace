import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { Genre } from 'src/app/models/Genre';
import { ComicService } from '../../../services/comic.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  comics: Comic[] = [];
  originalComics: Comic[] = [];
  genres:  Genre[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
 
  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.getComics();
    this.getGenres();
  }

  getComics(): void {
    this.comicService.getComics().subscribe((comics) => {
      this.comics = comics;
      this.originalComics=comics;
    });
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.comics.length / this.itemsPerPage);
  }

  getPages(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get comicsOnCurrentPage(): Comic[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.comics.length);
    return this.comics.slice(startIndex, endIndex);
  }




}
