import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LocalizeRouterModule } from 'localize-router';
import { LibsModule } from '../../lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule,
    LocalizeRouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
