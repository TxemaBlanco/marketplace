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

  it('should render app-headerclient', () => {
    fixture.detectChanges();
    const headerClientElement = fixture.nativeElement.querySelector('app-headerclient');
    expect(headerClientElement).toBeTruthy();
  });

  it('should render app-banner', () => {
    fixture.detectChanges();
    const bannerElement = fixture.nativeElement.querySelector('app-banner');
    expect(bannerElement).toBeTruthy();
  });

  it('should render app-comic-table', () => {
    fixture.detectChanges();
    const comicTableElement = fixture.nativeElement.querySelector('app-comic-table');
    expect(comicTableElement).toBeTruthy();
  });

 
});
