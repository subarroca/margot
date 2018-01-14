import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { StructureService } from '../structure/structure.service';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private langs$: Observable<string[]> = this.structureService.langs$;

  constructor(
    private structureService: StructureService,
    private localizeService: LocalizeRouterService
  ) { }

  ngOnInit() {
  }

  changeLang(lang) {
    this.localizeService.changeLanguage(lang);
  }

}
