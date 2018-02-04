import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    LocalizeRouterModule
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
