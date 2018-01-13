import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LibsModule } from 'app/lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
