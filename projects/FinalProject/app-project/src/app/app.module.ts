import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './element/header/header.component';
import { FooterComponent } from './element/footer/footer.component';
import { LoaderComponent } from './element/loader/loader.component';
import { ContentComponent } from './site/content/content.component';
import { HomeComponent } from './site/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ContentComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
