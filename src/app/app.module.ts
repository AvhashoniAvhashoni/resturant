import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './section/home/home.component';
import { MenuComponent } from './section/menu/menu.component';
import { BookComponent } from './section/book/book.component';
import { TestimonalComponent } from './section/testimonal/testimonal.component';
import { InstaComponent } from './section/insta/insta.component';
import { FooterComponent } from './section/footer/footer.component';
import { NavComponent } from './section/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BookComponent,
    TestimonalComponent,
    InstaComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
