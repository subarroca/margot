import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/page/home/home.component';
import { GalleryComponent } from 'app/page/gallery/gallery/gallery.component';
import { ContactComponent } from 'app/page/contact/contact.component';
import { InfoComponent } from 'app/page/info/info.component';
import { CategoryComponent } from 'app/page/category/category.component';
import { SectionComponent } from 'app/page/section/section.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
