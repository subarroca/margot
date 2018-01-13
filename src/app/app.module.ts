import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { StructureService } from './core/structure/structure.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LibsModule } from './lib/libs.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './page/home/home.module';
import { FooterModule } from './core/footer/footer.module';
import { NavbarModule } from './core/navbar/navbar.module';
import { CategoryModule } from './page/category/category.module';
import { SectionModule } from './page/section/section.module';
import { InfoModule } from './page/info/info.module';
import { ContactModule } from './page/contact/contact.module';
import { GalleryModule } from './page/gallery/gallery.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    LibsModule,

    AppRoutingModule,

    HomeModule,
    GalleryModule,
    ContactModule,
    InfoModule,
    SectionModule,
    CategoryModule,
    NavbarModule,
    FooterModule
  ],
  bootstrap: [AppComponent],
  providers: [StructureService]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.i18nUrl, '.json');
}
