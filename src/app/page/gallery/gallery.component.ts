import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page';
import { ActivatedRoute } from '@angular/router';
import { StructureService } from '../../core/structure/structure.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent extends PageComponent implements OnInit {
  galleryItems: GalleryItem[];

  constructor(
    protected route: ActivatedRoute,
    protected structureService: StructureService,
    protected sanitizer: DomSanitizer,
    protected translateService: TranslateService,
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {
    super(route, structureService, sanitizer);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  parseData() {
    const a = 0;
    this.galleryItems = [].concat(...this.content.sections
      .map(section => section.imgs
        .map(img => new ImageItem(`${environment.imageUrl}${img}`, `${environment.thumbsUrl}${img}`))));

    this.gallery.ref('lightbox').load(this.galleryItems);
  }

  get parsedTags(): string {
    return this.content
      ? this.content.tags
        .map(tag => this.translateService.instant(tag))
        .join(', ')
      : '';
  }

  getThumbnailPosition(section, item) {
    const prevImgs = this.content.sections
      .slice(0, section)
      .reduce((total, cur) => total + cur.imgs.length, 0);

    return prevImgs + item;
  }

}
