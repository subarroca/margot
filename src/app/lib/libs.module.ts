import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ]
})
export class LibsModule { }
