import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { GalleryComponent } from './page/gallery/gallery/gallery.component';
import { ContactComponent } from './page/contact/contact.component';
import { InfoComponent } from './page/info/info.component';
import { CategoryComponent } from './page/category/category.component';
import { SectionComponent } from './page/section/section.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'section/:id',
    component: SectionComponent
  }, {
    path: 'category/:id',
    component: CategoryComponent
  }, {
    path: 'gallery/:id',
    component: GalleryComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'info/:id',
    component: InfoComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
