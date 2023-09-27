import { Component } from '@angular/core';
import { ComicService } from '../../services/comic.service';
import { Comic } from 'src/app/models/Comic';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoping-cart-client',
  templateUrl: './shoping-cart-client.component.html',
  styleUrls: ['./shoping-cart-client.component.scss']
})
export class ShopingCartClientComponent {

  comics: Comic[] = [];
  genres: any[] = [];
  

  constructor(private cartService: CartService,private comicService: ComicService) {}

  ngOnInit(): void {
    this.getComics();
    this.getGenres();
    
  }

  getComics(): void {
    this.comics = this.cartService.getCartItems();   
    
  }

  getGenres(): void {
    this.comicService.getGenres().subscribe((genres: any) => {
      this.genres = genres;
    });
  }
  

  
}

