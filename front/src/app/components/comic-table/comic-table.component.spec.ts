import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicTableComponent } from './comic-table.component';

describe('ComicTableComponent', () => {
  let component: ComicTableComponent;
  let fixture: ComponentFixture<ComicTableComponent>;

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
  
});

