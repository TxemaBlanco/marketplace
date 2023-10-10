import { Component } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { Comic } from 'src/app/models/Comic';
import { ComicService } from 'src/app/services/comic/comic.service';

@Component({
  selector: 'app-comictableadmin',
  templateUrl: './comictableadmin.component.html',
  styleUrls: ['./comictableadmin.component.scss']
})
export class ComictableadminComponent {
  comics: Comic[] = [];
  originalComics: Comic[] = [];
  filteredComics: Comic[] = [];
  genres:  Genre[] = [];
  selectedGenre: any = null;
  selectedCoverType: string | null = null;
  searchTerm: string = '';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  sortByisbnAscending: boolean = true;
  sortByTitleAscending: boolean = true;
  sortByAuthorAscending: boolean = true;
  currentSortOrder: 'A-Z' | 'Z-A' = 'A-Z';
  showSearchPopup: boolean = false;
  showGenreFilterPopup: boolean = false;
  showCoverTypeFilterPopup: boolean = false;
  selectedAuthor: string = '';
  showAuthorFilterPopup: boolean = false;
  showcodigoFilterPopup: boolean = false;
  showisbnFilterPopup: boolean = false;
  selectedisbn: string = '';
  searchTextGlobal: string = '';
  columnFilters: {
    isbn: string;
    title: string;
    author: string;
    genre: number | null;
    coverType: string | null;
  } = {
    isbn: '',
    title: '',
    author: '',
    genre: null,
    coverType: null,
  };
  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    console.log("function ngOnInit");
    this.getComics();
    this.getGenres();
    this.filteredComics = this.comics;
  }

  getComics(): void {
    console.log("function getComics");
    this.comicService.getComics().subscribe((comics) => {      
      this.comics = comics.filter(comic => comic.stock > 0);
      this.originalComics=comics;
    });
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres
    });
  }

  applyFilters(): void {
    console.log("AAAAA")
    
   
  }
  
  

  toggleSortOrderPopup(order: 'A-Z' | 'Z-A') {
   
  }

  toggleSortOrderPopup2(order: 'A-Z' | 'Z-A') {
    
  }

  toggleSortOrderPopup3(order: 'A-Z' | 'Z-A') {
   
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

  toggleSearch() {
 
}

  toggleFilterPopup(filterType: 'isbn' | 'author' | 'genre' | 'coverType') {
   
  }

 

  resetFiltersAndSorting() {
    this.selectedAuthor = '';
    this.selectedGenre = null;
    this.selectedCoverType = null;
    this.searchTerm = '';
    this.searchTextGlobal = '';
    this.currentSortOrder = 'A-Z';
    this.sortByTitleAscending = true;
    this.sortByAuthorAscending = true;
    this.sortByisbnAscending = true;
    this.selectedisbn = '';
  }

  globalsearch() {
    if (this.searchTextGlobal.trim() === '') {
      this.getComics();
      return;
    }
  
    this.comicService.searchComics(this.searchTextGlobal).subscribe((comics) => {
      this.comics = comics;
  
      const searchKeywords = this.searchTextGlobal.toLowerCase().split(' ');
  
      const filteredComics = this.comics.filter((comic) => {
        const comicTitle = comic.title.toLowerCase();
        const comicAuthor = comic.author.toLowerCase();
        const comicISBN = comic.isbn.toLowerCase();
        const comicGenres = comic.genres.map((genre) => genre.name.toLowerCase());
  
        return (
          searchKeywords.some(keyword => comicTitle.includes(keyword)) ||
          searchKeywords.some(keyword => comicAuthor.includes(keyword)) ||
          searchKeywords.some(keyword => comicISBN.includes(keyword)) ||
          searchKeywords.some(keyword => comicGenres.some(genre => genre.includes(keyword)))
        );
      });
      this.comics = filteredComics;
    });
  }
  
  
  
  popup!: HTMLElement;

  onMouseOut(popup: HTMLElement) {
    popup.style.display = "none";
  }

  onMouseEnter(popup: HTMLElement) {
    popup.style.display = "block";
  }
}
