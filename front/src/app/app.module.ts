import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeadminviewComponent } from './views/homeadminview/homeadminview.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeuserviewComponent,
    HomeadminviewComponent,
<<<<<<< HEAD
  
=======
    BannerComponent 
   
>>>>>>> 8171ddcbbeddf3f98111484b7047a8c91050781a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
