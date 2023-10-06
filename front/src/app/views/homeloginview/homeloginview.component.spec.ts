import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeloginviewComponent } from './homeloginview.component';

describe('HomeloginviewComponent', () => {
  let component: HomeloginviewComponent;
  let fixture: ComponentFixture<HomeloginviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeloginviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-headerlogin', () => {
    const headerLoginElement = fixture.nativeElement.querySelector('app-headerlogin');
    expect(headerLoginElement).toBeTruthy();
  });

  it('should display app-banner', () => {
    const bannerElement = fixture.nativeElement.querySelector('app-banner');
    expect(bannerElement).toBeTruthy();
  });

  it('should display app-login', () => {
    const loginElement = fixture.nativeElement.querySelector('app-login');
    expect(loginElement).toBeTruthy();
  });

 
});

