import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiclistviewComponent } from './comiclistview.component';

describe('ComiclistviewComponent', () => {
  let component: ComiclistviewComponent;
  let fixture: ComponentFixture<ComiclistviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComiclistviewComponent]
    });
    fixture = TestBed.createComponent(ComiclistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
