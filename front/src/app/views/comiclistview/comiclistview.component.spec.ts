import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-headerclient',
  template: '<div>Header Client Component Mock</div>',
})
class HeaderClientMockComponent {}

@Component({
  selector: 'app-banner',
  template: '<div>Banner Component Mock</div>',
})
class BannerMockComponent {}

@Component({
  selector: 'app-comic-table',
  template: '<div>Comic Table Component Mock</div>',
})
class ComicTableMockComponent {}

@Component({
  selector: 'app-footer',
  template: '<div>Footer Component Mock</div>',
})
class FooterMockComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderClientMockComponent, BannerMockComponent, ComicTableMockComponent, FooterMockComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render the header, banner, comic table, and footer components', () => {
    fixture.detectChanges();

    const headerClientElement = fixture.nativeElement.querySelector('app-headerclient');
    const bannerElement = fixture.nativeElement.querySelector('app-banner');
    const comicTableElement = fixture.nativeElement.querySelector('app-comic-table');
    const footerElement = fixture.nativeElement.querySelector('app-footer');

    expect(headerClientElement).toBeTruthy();
    expect(bannerElement).toBeTruthy();
    expect(comicTableElement).toBeTruthy();
    expect(footerElement).toBeTruthy();
  });
});
