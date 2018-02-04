import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { LibsModule } from '../../lib/libs.module';
import { MediaModule } from '../../media/media.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule,
    MediaModule
  ],
  declarations: [SectionComponent],
  exports: [SectionComponent]
})
export class SectionModule { }
