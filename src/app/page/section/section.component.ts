import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StructureService } from '../../core/structure/structure.service';
import { PageComponent } from '../page';
import { HostBinding } from '@angular/core/src/metadata/directives';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent extends PageComponent implements OnInit {
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
}
