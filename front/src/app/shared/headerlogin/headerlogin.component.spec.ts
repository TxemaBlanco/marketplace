import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderloginComponent } from './headerlogin.component';

describe('HeaderloginComponent', () => {
  let component: HeaderloginComponent;
  let fixture: ComponentFixture<HeaderloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderloginComponent],
    });
    fixture = TestBed.createComponent(HeaderloginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title "MarketPlace ComicBook"', () => {
    fixture.detectChanges();
    const navbarBrandElement = fixture.nativeElement.querySelector('.navbar-brand');
    expect(navbarBrandElement).toBeTruthy();
    expect(navbarBrandElement.textContent).toContain('MarketPlace ComicBook');
  });
});
