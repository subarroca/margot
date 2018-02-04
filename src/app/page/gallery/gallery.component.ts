import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page';
import { ActivatedRoute } from '@angular/router';
import { StructureService } from '../../core/structure/structure.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent extends PageComponent implements OnInit {
  galleries: any[];

  constructor(
    protected route: ActivatedRoute,
    protected structureService: StructureService,
    protected sanitizer: DomSanitizer,
    protected translateService: TranslateService
  ) {
    super(route, structureService, sanitizer);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get parsedTags(): string {
    return this.content
      ? this.content.tags
        .map(tag => this.translateService.instant(tag))
        .join(', ')
      : '';
  }

}
