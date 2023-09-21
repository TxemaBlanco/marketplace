import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from 'src/app/models/Comic';
@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {
  comic: Comic | undefined;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    if (isbn) {
      this.comicService.getComicByISBN(isbn).subscribe(
        (comic: Comic) => {
          this.comic = comic;
          console.log(this.comic.photo)
        },
        (error) => {
          console.error('Error al obtener el cómic:', error);
        }
      );
    }
  }
}