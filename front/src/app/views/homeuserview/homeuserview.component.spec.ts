import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeuserviewComponent } from './homeuserview.component';

describe('HomeuserviewComponent', () => {
  let component: HomeuserviewComponent;
  let fixture: ComponentFixture<HomeuserviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeuserviewComponent],
    });
    fixture = TestBed.createComponent(HomeuserviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

 
});
