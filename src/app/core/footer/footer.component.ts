import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { StructureService } from '../structure/structure.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private langs$: Observable<string[]> = this.structureService.langs$;

  constructor(
    private structureService: StructureService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  changeLang(lang) {
    console.log(lang);
    this.translateService.use(lang);
  }

}
