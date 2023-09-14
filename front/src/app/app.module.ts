import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeadminviewComponent } from './views/homeadminview/homeadminview.component';

import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderclientComponent } from './shared/headerclient/headerclient.component';
import { HeaderadminComponent } from './shared/headeradmin/headeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComicTableComponent } from '../app/components/comic-table/comic-table.component';
import { ComiclistviewComponent } from './views/comiclistview/comiclistview.component';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeuserviewComponent,
    HomeadminviewComponent,
    BannerComponent,
    FooterComponent,
    HeaderadminComponent,
    HeaderclientComponent,
    ComicTableComponent,
    ComiclistviewComponent,
  LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
