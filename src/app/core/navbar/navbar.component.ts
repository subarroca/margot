import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { StructureService } from '../structure/structure.service';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu$ = this.structureService.menu$;
  langs$: Observable<string[]> = this.structureService.langs$;
  currentLang = this.translateService.currentLang;

  constructor(
    private structureService: StructureService,
    private localizeService: LocalizeRouterService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }


  changeLang(lang) {
    this.localizeService.changeLanguage(lang);
    this.currentLang = lang;
  }
}
