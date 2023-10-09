import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ComictableadminComponent } from './comictableadmin.component';

describe('ComictableadminComponent', () => {
  let component: ComictableadminComponent;
  let fixture: ComponentFixture<ComictableadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComictableadminComponent],
      imports: [FormsModule], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComictableadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply filters', () => {
   
    component.columnFilters = {
      isbn: '1234567890',
      title: 'Sample Title',
      author: 'Sample Author',
      genre: 1, 
      coverType: 'hard',
    };

  
    component.applyFilters();

 
    expect(component.comics).toEqual([]);
  });

  it('should toggle search', () => {
 
    component.toggleSearch();

    
    expect(component.showSearchPopup).toBe(false);
  });

  
});
