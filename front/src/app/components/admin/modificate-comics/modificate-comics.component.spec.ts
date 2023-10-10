import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificateComicsComponent } from './modificate-comics.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ComicService } from 'src/app/services/comic/comic.service';
import { of } from 'rxjs';

describe('ModificateComicsComponent', () => {
  let component: ModificateComicsComponent;
  let fixture: ComponentFixture<ModificateComicsComponent>;


  const mockBsModalService = {
    show: () => {},
  };

  const mockComicService = {
    getComics: () => of([]),
    getGenres: () => of([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificateComicsComponent],
      providers: [
        { provide: BsModalService, useValue: mockBsModalService },
        { provide: ComicService, useValue: mockComicService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificateComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open edit modal', () => {
    const mockComic = { };
    spyOn(mockBsModalService, 'show');
   
    expect(mockBsModalService.show).toHaveBeenCalledWith(
     
      
    );
  });

  it('should get comics and genres on init', () => {
    spyOn(mockComicService, 'getComics').and.returnValue(of([]));
    spyOn(mockComicService, 'getGenres').and.returnValue(of([]));
    component.ngOnInit();
    expect(mockComicService.getComics).toHaveBeenCalled();
    expect(mockComicService.getGenres).toHaveBeenCalled();
  });


});
