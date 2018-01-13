import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { LibsModule } from 'app/lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [GalleryComponent, GalleryItemComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
