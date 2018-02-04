import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StructureService } from '../core/structure/structure.service';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';


export class PageComponent implements OnInit, OnDestroy {
  @HostBinding('style.backgroundImage') bgImg;

  content: any;
  params$$: Subscription;

  constructor(
    protected route: ActivatedRoute,
    protected structureService: StructureService,
    protected sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.params$$ = this.route.params
      .subscribe(params =>
        this.structureService.loadPageContent(params.category, params.id)
          .subscribe(content => {
            this.content = content;
            this.bgImg = this.sanitizer.bypassSecurityTrustStyle(`url(${this.content.img})`);
            this.parseData();
          })
      );
  }

  ngOnDestroy() {
    if (this.params$$) {
      this.params$$.unsubscribe();
    }
  }

  parseData() { }
}
