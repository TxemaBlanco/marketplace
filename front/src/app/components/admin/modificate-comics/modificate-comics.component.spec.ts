import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificateComicsComponent } from './modificate-comics.component';

describe('ModificateComicsComponent', () => {
  let component: ModificateComicsComponent;
  let fixture: ComponentFixture<ModificateComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificateComicsComponent]
    });
    fixture = TestBed.createComponent(ModificateComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
