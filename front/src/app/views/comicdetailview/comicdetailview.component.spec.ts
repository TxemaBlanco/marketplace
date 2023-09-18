import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicdetailviewComponent } from './comicdetailview.component';

describe('ComicdetailviewComponent', () => {
  let component: ComicdetailviewComponent;
  let fixture: ComponentFixture<ComicdetailviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicdetailviewComponent]
    });
    fixture = TestBed.createComponent(ComicdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
