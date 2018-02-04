import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import { StructureService } from './core/structure/structure.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LibsModule } from './lib/libs.module';
import { routes } from './app-routing.module';
import { HomeModule } from './page/home/home.module';
import { FooterModule } from './core/footer/footer.module';
import { NavbarModule } from './core/navbar/navbar.module';
import { CategoryModule } from './page/category/category.module';
import { SectionModule } from './page/section/section.module';
import { ContactModule } from './page/contact/contact.module';
import { GalleryModule } from './page/gallery/gallery.module';
import { environment } from '../environments/environment';
import { LocalizeRouterModule, LocalizeParser, ManualParserLoader, LocalizeRouterSettings } from 'localize-router';
import { HomeComponent } from './page/home/home.component';
import { Location } from '@angular/common';
import { SectionComponent } from './page/section/section.component';
import { CategoryComponent } from './page/category/category.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ContactComponent } from './page/contact/contact.component';
import { StructureMenuItem } from './core/structure/structure-menu-item';
import { Router } from '@angular/router';

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

    // AppRoutingModule,

    HomeModule,
    GalleryModule,
    ContactModule,
    SectionModule,
    CategoryModule,
    NavbarModule,
    FooterModule,

    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings]
      }
    }),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  providers: [
    StructureService
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadStructure,
    //   multi: true,
    //   deps: [Injector, StructureService]
    // },
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.i18nUrl, '.json');
}

export function localizeLoaderFactory(translate: TranslateService, location: Location, settings) {
  // return new StaticParserLoader(translate, location, http);
  return new ManualParserLoader(translate, location, settings, ['ca', 'en']);
}

/*
export function loadStructure(injector: Injector, structureService: StructureService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      const templates = {
        section: SectionComponent,
        category: CategoryComponent,
        info: InfoComponent,
        gallery: GalleryComponent,
        contact: ContactComponent
      };

      structureService
        .menu$
        .first()
        .subscribe((menu: StructureMenuItem[][]) => {
          let sections = [].concat(...menu);
          sections = sections.concat(sections.map(section => section.children));
          sections = [].concat(...sections).filter(section => !!section);
          const loadedRoutes: Routes = sections.map(section => ({
            path: section.id,
            component: templates[section.template]
          }));
          injector.get(Router)
            .resetConfig(initialRoutes.concat(...loadedRoutes).concat(defaultRoute));

          resolve();
        });
    });
  };
}
 */
