import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { ContentComponent } from './site/content/content.component';

const siteRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(siteRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
