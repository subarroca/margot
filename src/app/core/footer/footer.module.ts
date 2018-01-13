import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { LibsModule } from 'app/lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
