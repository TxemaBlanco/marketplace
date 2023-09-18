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

import { LoginComponent } from './examples/login/login.component';
import { RegisterComponent } from './examples/register/register.component';
import { NewcustomerComponent } from './examples/register_pablo/newcustomer/newcustomer.component';

import {ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';



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
    LoginComponent,
    RegisterComponent,
    NewcustomerComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
