import { Injectable } from '@angular/core';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { StructureConfig } from './structure-config';
import { StructureMenuItem } from './structure-menu-item';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';

@Injectable()
export class StructureService {
  private langsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  langs$ = this.langsSubject.asObservable().filter(langs => langs[0] !== undefined);

  private menuSubject: BehaviorSubject<StructureMenuItem[][]> = new BehaviorSubject<StructureMenuItem[][]>([]);
  menu$ = this.menuSubject.asObservable().filter(menu => menu[0] !== undefined);

  private sectionMap;

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private router: Router,
    private localize: LocalizeRouterService
  ) {

    this.http.get<StructureConfig>(`${environment.structureUrl}/main.json`)
      .subscribe(data => {
        this.langsSubject.next(data.langs);
        this.menuSubject.next(data.menu);

        let sections = [].concat(...data.menu);
        sections = sections.concat(sections.map(section => section.children));
        this.sectionMap = [].concat(...sections)
          .filter(section => !!section)
          .reduce((obj, section) => {
            obj[section.id] = ['/', section.type, section.id];
            obj[section.id] = `/${section.type}/${section.id}`;

            return obj;
          }, {});
      });
  }


  loadPageContent(category: string, id: string) {
    const origCat = this.getUntranslated(category);
    const origId = this.getUntranslated(id);

    const route = origCat ? `${origCat}/${origId}` : origId;

    const data$ = this.http
      .get<any>(`${environment.structureUrl}/content/${route}.json`);

    data$
      .subscribe(
      () => false,
      error =>
        this.router.navigate([this.localize.translateRoute('/')])
      );

    return data$;
  }

  getRoute(id: string) {
    return this.menu$
      .first()
      .map(menu => {
        console.log(this.sectionMap[id]);

        return this.sectionMap[id];
      });
  }

  private getUntranslated(id) {
    const section: any = Object.entries(this.translateService
      .translations[this.translateService.currentLang])
      .find(pair => id === pair[1]);

    return section ? section[0].split('ROUTES.')[1] : id;
  }
}
