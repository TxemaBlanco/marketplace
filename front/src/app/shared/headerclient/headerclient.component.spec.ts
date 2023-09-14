import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderclientComponent } from './headerclient.component';

describe('HeaderClientComponent', () => {
  let component: HeaderclientComponent;
  let fixture: ComponentFixture<HeaderclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderclientComponent],
    });
    fixture = TestBed.createComponent(HeaderclientComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have a closed menu', () => {
    expect(component.isMenuOpen).toBe(false);
  });

  it('should open the menu when toggleMenu() is called', () => {
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);
  });

  it('should close the menu when closeMenu() is called', () => {
    component.isMenuOpen = true; 
    component.closeMenu();
    expect(component.isMenuOpen).toBe(false);
  });

  it('should have the correct menu links', () => {
    const compiled = fixture.nativeElement;
    const menuLinks = compiled.querySelectorAll('.nav-item.nav-link');


    expect(menuLinks.length).toBe(4);


    expect(menuLinks[0].textContent).toContain('Comprar');
    expect(menuLinks[1].textContent).toContain('Carro');
    expect(menuLinks[2].textContent).toContain('Historial');
    expect(menuLinks[3].textContent).toContain('Cerrar Sesión');
  });
});