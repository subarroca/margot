import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { MediaModule } from '../../media/media.module';
import { LibsModule } from '../../lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    LibsModule
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent]
})
export class CategoryModule { }
