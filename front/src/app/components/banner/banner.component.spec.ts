import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    });

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create the BannerComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a background image', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const bannerStyles = window.getComputedStyle(bannerElement.querySelector('.banner') as HTMLElement);
    const backgroundImage = bannerStyles.backgroundImage;
    expect(backgroundImage).toContain('assets/banner4.png');
  });

  it('should have proper SCSS styles', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const bannerStyles = window.getComputedStyle(bannerElement.querySelector('.banner') as HTMLElement);
    
    expect(bannerStyles.getPropertyValue('background-size')).toBe('cover');
    expect(bannerStyles.getPropertyValue('background-repeat')).toBe('no-repeat');
    expect(bannerStyles.getPropertyValue('color')).toBe('rgb(255, 255, 255)');
  
  });

});
