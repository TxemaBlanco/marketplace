import { Component, OnInit } from '@angular/core';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-comic-table',
  templateUrl: './comic-table.component.html',
  styleUrls: ['./comic-table.component.scss']
})
export class ComicTableComponent implements OnInit {
  comics: any[] = [];
  genres: any[] = [];
  selectedGenre: any = null;
  selectedCoverType: string | null = null;
  searchTerm: string = '';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  sortByTitleAscending: boolean = true;
  currentSortOrder: 'A-Z' | 'Z-A' = 'A-Z';
  showSearchPopup: boolean = false;
  showGenreFilterPopup: boolean = false;
  showCoverTypeFilterPopup: boolean = false;

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.getComics();
    this.getGenres();
  }

  getComics(): void {
    this.comicService.getComics().subscribe((comics) => {
      this.comics = comics;
      this.applyFilters();
    });
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }

  applyFilters(): void {
    let filteredComics = this.comics;

    if (this.selectedGenre) {
      filteredComics = filteredComics.filter((comic) =>
        comic.genres.some((g: any) => g.id === this.selectedGenre)
      );
    }

    if (this.selectedCoverType === 'hard') {
      filteredComics = filteredComics.filter((comic) => comic.ishardcover);
    } else if (this.selectedCoverType === 'soft') {
      filteredComics = filteredComics.filter((comic) => !comic.ishardcover);
    }

    if (this.searchTerm) {
      filteredComics = filteredComics.filter((comic) =>
        comic.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (!this.sortByTitleAscending) {
      filteredComics.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      filteredComics.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.comics = filteredComics;
  }

  toggleSortOrderPopup(order: 'A-Z' | 'Z-A') {
    this.currentSortOrder = order;
    this.sortByTitleAscending = !this.sortByTitleAscending;
    this.applyFilters();
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

  get comicsOnCurrentPage(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.comics.slice(startIndex, endIndex);
  }

  toggleSearch() {
    this.showSearchPopup = !this.showSearchPopup;
    if (!this.showSearchPopup) {
      this.searchTerm = '';
      this.applyFilters();
    }
  }

  toggleFilterPopup(filterType: 'genre' | 'coverType') {
    if (filterType === 'genre') {
      this.showGenreFilterPopup = !this.showGenreFilterPopup;
    } else if (filterType === 'coverType') {
      this.showCoverTypeFilterPopup = !this.showCoverTypeFilterPopup;
    }
    this.searchTerm = '';
    this.applyFilters();
  }
}
