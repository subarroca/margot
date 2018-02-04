import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaBannerComponent } from './media-banner/media-banner.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { LibsModule } from '../lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [MediaBannerComponent, MediaCardComponent],
  exports: [MediaBannerComponent, MediaCardComponent]
})
export class MediaModule { }
