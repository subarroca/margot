import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    LocalizeRouterModule,
    GalleryModule,
    LightboxModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    LocalizeRouterModule
  ]
})
export class LibsModule { }
