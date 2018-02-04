import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page';
import { ActivatedRoute } from '@angular/router';
import { StructureService } from '../../core/structure/structure.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends PageComponent implements OnInit {
  galleries: any[];

  constructor(
    protected route: ActivatedRoute,
    protected structureService: StructureService,
    protected sanitizer: DomSanitizer
  ) {
    super(route, structureService, sanitizer);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  parseData() {
    if (this.content.main && this.content.main.galleries) {
      this.galleries = Object.entries(this.content.main.galleries)
        .map(([k, v]) => {
          v.id = k;
          return v;
        });
    }
  }
}
