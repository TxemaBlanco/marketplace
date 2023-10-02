import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from '../../../models/Comic'; 
import { Genre } from '../../../models/Genre';
import { BsModalRef } from 'ngx-bootstrap/modal';

const allGenres: string[] = [
  "Infantil",
  "Juvenil",
  "Manga",
  "Novela Gráfica",
  "Humor",
  "Superhéroes",
  "Ciencia Ficción",
  "Fantasía"
];
@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {
  comicToEdit: Comic = new Comic(); 
  editedComic: Comic = new Comic();
  allGenres = allGenres; 

  constructor(public bsModalRef: BsModalRef, private comicService: ComicService) {}

  ngOnInit(): void {
   
    this.editedComic = { ...this.comicToEdit };
  }
  openEditForm(comic: Comic) {
    
    this.editedComic = { ...comic };
    
   
    this.comicService.getGenres().subscribe((genres) => {
     
      this.editedComic.genres = this.editedComic.genres.map((genreName) => {
        const matchingGenre = genres.find((genre) => genre.name === genreName);
        return matchingGenre || { id: 0, name: genreName }; 
      });
    });
  }
  saveChanges() {
    const isbn = this.comicToEdit.isbn;
    this.comicService.updateComic(isbn, this.editedComic).subscribe(
      (updatedComic) => {
        
        console.log('Cómic actualizado:', updatedComic);
        this.bsModalRef.hide(); 
      },
      (error) => {
        
        console.error('Error al actualizar el cómic:', error);
       
      }
    );
  }
}