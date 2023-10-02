import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComicTableComponent } from './comic-table.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComicService } from 'src/app/services/comic.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComicTableComponent', () => {
  let component: ComicTableComponent;
  let fixture: ComponentFixture<ComicTableComponent>;
  let debugElement: DebugElement;
  let mockComicService: jasmine.SpyObj<ComicService>;

  beforeEach(async () => {
    mockComicService = jasmine.createSpyObj('ComicService', [
      'getComics',
      'getGenres',
      'searchComics',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ComicTableComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: ComicService, useValue: mockComicService }],
    }).compileComponents();
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicTableComponent]
    });
    fixture = TestBed.createComponent(ComicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update searchTextGlobal when input value changes', () => {
    const inputElement: HTMLInputElement = debugElement.query(By.css('.search-up')).nativeElement;

    inputElement.value = 'Test Search';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.searchTextGlobal).toBe('Test Search');
  });

  it('should apply filters when inputs change', () => {
    const searchInput: HTMLInputElement = debugElement.query(By.css('.search-up')).nativeElement;
    const titleInput: HTMLInputElement = debugElement.query(By.css('#searchInput')).nativeElement;
    const authorInput: HTMLInputElement = debugElement.query(By.css('#authorFilter')).nativeElement;
    const genreFilter: HTMLSelectElement = debugElement.query(By.css('#genreFilter')).nativeElement;

    searchInput.value = 'Search Text';
    titleInput.value = 'Title Text';
    authorInput.value = 'Author Text';
    genreFilter.value = '1';

    searchInput.dispatchEvent(new Event('input'));
    titleInput.dispatchEvent(new Event('input'));
    authorInput.dispatchEvent(new Event('input'));
    genreFilter.dispatchEvent(new Event('change'));

    fixture.detectChanges();

   
    
    expect(component.columnFilters.title).toBe('Title Text');
    expect(component.columnFilters.author).toBe('Author Text');
    
  });

 

});

