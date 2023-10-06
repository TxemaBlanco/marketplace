import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct copyright text', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const copyrightText = footerElement.querySelector('p')!.textContent;
    expect(copyrightText).toContain('© 2023 Comic Books. Todos los derechos reservados.');
  });

  it('should contain social media links', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const socialLinks = footerElement.querySelectorAll('.social-footer a');
    expect(socialLinks.length).toBe(3);
  });
});