import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComictableadminComponent } from './comictableadmin.component';

describe('ComictableadminComponent', () => {
  let component: ComictableadminComponent;
  let fixture: ComponentFixture<ComictableadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComictableadminComponent],
    });
    fixture = TestBed.createComponent(ComictableadminComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize comics and genres on ngOnInit', () => {
    spyOn(component, 'getComics');
    spyOn(component, 'getGenres');
    
    component.ngOnInit();
    
    expect(component.getComics).toHaveBeenCalled();
    expect(component.getGenres).toHaveBeenCalled();
  });

  it('should filter comics based on search text', () => {
    component.comics = [
      { isbn:'12314523651235' , title: 'Comic 1', author: 'Author 1', genres: 'Juvenil'  }
   
    ];

    component.searchTextGlobal = 'Comic 1';

    component.globalsearch();

    expect(component.comics.length).toBe(1);
    expect(component.comics[0].title).toBe('Comic 1');
  });

});
