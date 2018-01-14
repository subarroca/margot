import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { LibsModule } from '../../lib/libs.module';
import { LocalizeRouterModule } from 'localize-router';

@NgModule({
  imports: [
    CommonModule,
    LibsModule,
    LocalizeRouterModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
