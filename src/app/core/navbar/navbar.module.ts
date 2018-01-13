import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LibsModule } from 'app/lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
