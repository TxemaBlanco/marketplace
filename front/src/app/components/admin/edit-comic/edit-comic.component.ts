import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic/comic.service';
import { Comic } from '../../../models/Comic'; 
import { Genre } from '../../../models/Genre';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  myForm: FormGroup;
  comicToEdit: Comic = new Comic(); 
  editedComic: Comic = new Comic();
  allGenres: Genre[] = [];
  currentGenres: Genre[] = [];
  images: any;
  newComicPhoto: File | null = null;
  photoPreviewUrl: string | ArrayBuffer | null = null;
  covers: string[] = ['Tapa Dura', 'Tapa Blanda'];
  constructor(public bsModalRef: BsModalRef, private comicService: ComicService, private http: HttpClient,fb: FormBuilder) {
    this.myForm = fb.group({
      isbn: ['', [Validators.required, Validators.pattern('[0-9]{13}')]],
      title: [''],
      author: [''],
      ishardcover: [false],
      photo: [''],
      price: [0],
      synopsis: [''],
      stock: [0],
      genre: [],
    });
  }

  ngOnInit(): void {   
    this.editedComic = { ...this.comicToEdit };
    this.getGenres();
    this.currentGenres = this.editedComic.genres;
  }
  getGenres(): void {
    this.comicService.getGenres().subscribe((genres) => {
      this.allGenres = genres;
    });
  }

  
 
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoPreviewUrl = e.target.result;
        this.newComicPhoto = file; 
      };
      reader.readAsDataURL(file);
    }
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
  
    if (this.newComicPhoto) {
      
      this.comicService.uploadComicPhoto(isbn, this.newComicPhoto).subscribe(
        (response) => {
          
          this.editedComic.photo = response.photoUrl;
          this.bsModalRef.hide();
          
          this.comicService.updateComic(isbn, this.editedComic).subscribe(
            (updatedComic) => {
              console.log('Cómic actualizado con la nueva foto:', updatedComic);
              this.bsModalRef.hide();
            },
            (error) => {
              console.error('Error al actualizar el cómic:', error);
            }
          );
        },
        (error) => {
          console.error('Error al cargar la foto del cómic:', error);
        }
      );
    } else {
      
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
  addGenreToList(genre:Genre) 
  {
    this.addGenre(genre);
  }
  addGenre(genre: Genre) {
    this.currentGenres.push(genre);
    console.log('añadido = ' + genre.name);
  }
  deleteGenre(index:number){
    console.log("function deleteGenre-> index=" + index);
    this.currentGenres.splice(index,1);  
    this.currentGenres.forEach(currentGenre=>console.log(currentGenre.name));
      
  }  
}