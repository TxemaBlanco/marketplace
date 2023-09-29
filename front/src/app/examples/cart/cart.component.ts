import { Component } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { CartService } from 'src/app/services/cart.service';
import { ComicService } from 'src/app/services/comic.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  comics: Comic[] = [];
  genres: any[] = [];
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
  filteredComics: Comic[] = [];

  constructor(private cartService: CartService, private comicService:ComicService) {}

  ngOnInit(): void {
    this.getComics();
    this.getGenres();
  }

  getComics(): void {
    this.comics = this.cartService.getCartItems();    
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }  
}
