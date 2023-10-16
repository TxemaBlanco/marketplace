import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic/comic.service';
import { Comic } from '../../../models/Comic'; 
import { Genre } from '../../../models/Genre';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/fileupload/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  allGenres: Genre[] = [];
  currentGenres: Genre[] = [];
  images: any;
  imageInfos?: Observable<any>;
  selectedFiles?: FileList;
  currentFile?: File;
  fileName?:any;
  progress = 0;
  message = '';
  preview = '';
  newComicPhoto: File | null = null;
  photoPreviewUrl: string | ArrayBuffer | null = null;
  covers: string[] = ['Tapa Dura', 'Tapa Blanda'];
  constructor(public bsModalRef: BsModalRef, private comicService: ComicService,private uploadService:FileUploadService, private http: HttpClient) {
    
  }

  ngOnInit(): void {   
    this.editedComic = { ...this.comicToEdit };
    this.getGenres();
    this.currentGenres = this.editedComic.genres;
    this.imageInfos = this.uploadService.getFiles();
    this.preview = 'http://localhost:8000/files/' + this.editedComic.photo;
    
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

  saveChanges() {
    const isbn = this.comicToEdit.isbn;
    this.upload();
  
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
      if(this.fileName){
        this.editedComic.photo = this.fileName;
      } 
      console.log('Cómic photo:', this.fileName);
      this.editedComic.genres = this.currentGenres;
      console.log('Cómic editado:', this.editedComic);
      this.comicService.editComic(this.editedComic).subscribe(
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
  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }
  }
  upload(): void {
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.fileName = file?.name;
  
      if (file) {
        this.currentFile = file;
  
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }
  
            this.currentFile = undefined;
          },
        });
      }
  
      this.selectedFiles = undefined;
    }
  }
}