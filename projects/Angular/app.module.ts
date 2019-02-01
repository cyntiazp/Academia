import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './site/products/product-list.component';
import { LoaderComponent } from './loader/loader.component';
import { MiembrosService } from './service/miembros.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MiembrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
