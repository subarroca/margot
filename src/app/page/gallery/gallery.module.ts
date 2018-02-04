import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '../../media/media.module';
import { GalleryComponent } from './gallery.component';
import { LibsModule } from '../../lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    LibsModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
