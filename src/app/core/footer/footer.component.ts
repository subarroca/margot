import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StructureService } from '../structure/structure.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    private structureService: StructureService
  ) { }

  ngOnInit() {
  }

}
