import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Comic } from 'src/app/models/Comic';
import { Genre } from 'src/app/models/Genre';
import { ComicService } from 'src/app/services/comic.service';
import { EditComicComponent } from '../edit-comic/edit-comic.component';

@Component({
  selector: 'app-modificate-comics',
  templateUrl: './modificate-comics.component.html',
  styleUrls: ['./modificate-comics.component.scss'],
})
export class ModificateComicsComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  allComics: Comic[] = [];
  filteredComics: Comic[] = [];
  genres: Genre[] = [];
  selectedGenre: any = null;
  selectedCoverType: string | null = null;
  searchTerm: string = '';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  sortByisbnAscending: boolean = true;
  sortByTitleAscending: boolean = true;
  sortByAuthorAscending: boolean = true;
  currentSortOrder: 'A-Z' | 'Z-A' = 'A-Z';
  showGenreFilterPopup: boolean = false;
  showCoverFilterPopup: boolean = false;
  showAuthorFilterPopup: boolean = false;
  showTitleFilterPopup: boolean = false;
  showIsbnFilterPopup: boolean = false;

  selectedisbn: string = '';
  searchTextGlobal: string = '';

  columnFilters: {
    isbn: string;
    title: string;
    author: string;
    genre: string;
    coverType: string | null;
  } = {
    isbn: '',
    title: '',
    author: '',
    genre: '',
    coverType: null,
  };
  constructor(
    private comicService: ComicService,
    private modalService: BsModalService
  ) {}

  openEditModal(comic: Comic) {
    const initialState = {
      comicToEdit: comic,
    };
    this.bsModalRef = this.modalService.show(EditComicComponent, {
      initialState,
    });
  }

  ngOnInit(): void {
    this.getComics();
    this.getGenres();
  }

  getComics(): void {
    this.comicService.getComics().subscribe((comics) => {
      this.allComics = comics;
      this.filteredComics = comics;
    });
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }
  applySearch(event: any) {
    let filterValueLower = event.target.value.toLowerCase();
    console.log('filterValueLower = ' + filterValueLower);
    if (filterValueLower === '') {
      this.filteredComics = this.allComics;
    } else {
      this.filteredComics = this.allComics.filter(
        (comic) =>
          comic.title.toLowerCase().includes(filterValueLower) ||
          comic.isbn.includes(filterValueLower) ||
          comic.author.toLowerCase().includes(filterValueLower)
      );
    }
  }
  applyCoverFilter() {
    if (this.columnFilters.coverType !== null) {
      if (this.columnFilters.coverType === 'hard') {
        this.filteredComics = this.allComics.filter(
          (comic) => comic.ishardcover
        );
      } else {
        this.filteredComics = this.allComics.filter(
          (comic) => !comic.ishardcover
        );
      }
    } else {
      this.filteredComics = this.allComics;
    }
  }

  applyFilters(by: 'isbn' | 'title' | 'author' | 'genre'): void {
    this.filteredComics = this.allComics.slice();
    switch (by) {
      case 'isbn':
        this.filteredComics = this.allComics.filter((comic) =>
          comic.isbn
            .toLowerCase()
            .includes(this.columnFilters.isbn.toLowerCase())
        );
        break;
      case 'title':
        this.filteredComics = this.allComics.filter((comic) =>
          comic.title
            .toLowerCase()
            .includes(this.columnFilters.title.toLowerCase())
        );
        break;
      case 'author':
        this.filteredComics = this.allComics.filter((comic) =>
          comic.author
            .toLowerCase()
            .includes(this.columnFilters.author.toLowerCase())
        );
        break;
      case 'genre':
        if(this.columnFilters.genre){
          this.filteredComics = this.allComics.filter((comic) =>
          comic.genres.some((g: any) => g.id === this.columnFilters.genre)
        );
        }else{
          this.filteredComics = this.allComics;
        }
        
    }
  }
  toggleSortOrder(by: 'title' | 'author' | 'isbn') {
    switch (by) {
      case 'title':
        this.sortByTitleAscending = !this.sortByTitleAscending;
        if (!this.sortByTitleAscending) {
          this.filteredComics.sort((a, b) => b.title.localeCompare(a.title));
        } else {
          this.filteredComics.sort((a, b) => a.title.localeCompare(b.title));
        }
        break;
      case 'author':
        this.sortByAuthorAscending = !this.sortByAuthorAscending;
        if (!this.sortByAuthorAscending) {
          this.filteredComics.sort((a, b) => b.author.localeCompare(a.author));
        } else {
          this.filteredComics.sort((a, b) => a.author.localeCompare(b.author));
        }
        break;
      case 'isbn':
        this.sortByisbnAscending = !this.sortByisbnAscending;
        if (!this.sortByisbnAscending) {
          this.filteredComics.sort((a, b) => b.isbn.localeCompare(a.isbn));
        } else {
          this.filteredComics.sort((a, b) => a.isbn.localeCompare(b.isbn));
        }
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredComics.length / this.itemsPerPage);
  }

  getPages(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get comicsOnCurrentPage(): Comic[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(
      startIndex + this.itemsPerPage,
      this.filteredComics.length
    );
    return this.filteredComics.slice(startIndex, endIndex);
  }

  toggleFilterPopup(
    filterType: 'isbn' | 'title' | 'author' | 'genre' | 'coverType'
  ) {
    switch (filterType) {
      case 'isbn':
        this.showIsbnFilterPopup = !this.showIsbnFilterPopup;
        break;
      case 'title':
        this.showTitleFilterPopup = !this.showTitleFilterPopup;
        break;
      case 'genre':
        this.showGenreFilterPopup = !this.showGenreFilterPopup;
        break;
      case 'coverType':
        this.showCoverFilterPopup = !this.showCoverFilterPopup;
        break;
      case 'author':
        this.showAuthorFilterPopup = !this.showAuthorFilterPopup;
        break;
    }
  }

  popup!: HTMLElement;

  displayNone(popup: HTMLElement) {
    popup.style.display = 'none';
  }

  onMouseEnter(popup: HTMLElement) {
    popup.style.display = 'block';
  }
}
