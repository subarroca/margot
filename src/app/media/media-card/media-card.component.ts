import { Component, OnInit, Input } from '@angular/core';
import { StructureService } from '../../core/structure/structure.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
  @Input() set tags(tags: string[]) {
    this._tags = tags;
  }
  @Input() place: string;
  @Input() img: string;
  @Input() link: string;

  private _tags: string[];

  constructor(
    private translateService: TranslateService,
    private structureService: StructureService
  ) {
  }

  ngOnInit() {
  }

  get parsedTags(): string {
    return this._tags
      ? this._tags
        .map(tag => this.translateService.instant(tag))
        .join(', ')
      : '';
  }

}
