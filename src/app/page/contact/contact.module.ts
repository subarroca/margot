import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { LibsModule } from 'app/lib/libs.module';

@NgModule({
  imports: [
    CommonModule,
    LibsModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
