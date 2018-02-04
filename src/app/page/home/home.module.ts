import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LibsModule } from '../../lib/libs.module';
import { MediaModule } from '../../media/media.module';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    LibsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
