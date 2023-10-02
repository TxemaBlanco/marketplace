import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { BannerComponent } from './components/user/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderclientComponent } from './shared/headerclient/headerclient.component';
import { HeaderadminComponent } from './shared/headeradmin/headeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComicTableComponent } from './components/user/comic-table/comic-table.component';
import { LoginComponent } from './components/user/login/login.component';
import { ComicDetailComponent } from './components/user/comic-detail/comic-detail.component';
import { HeaderloginComponent } from './shared/headerlogin/headerlogin.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCartClientComponent } from './components/user/shoping-cart-client/shoping-cart-client.component';
import { RegisterAComponent } from './components/user/register-a/register-a.component';
import { HomeloginviewComponent } from './views/homeloginview/homeloginview.component';
import { ComictableadminComponent } from './components/admin/comictableadmin/comictableadmin.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeuserviewComponent,
    HomeloginviewComponent,
    BannerComponent,
    FooterComponent,
    HeaderadminComponent,
    HeaderclientComponent,
    ComicTableComponent,
    LoginComponent,
    ComicDetailComponent,
    HeaderloginComponent,
    ShopingCartClientComponent,
    RegisterAComponent,
    ComictableadminComponent,
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
