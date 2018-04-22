import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { StructureService } from '../../core/structure/structure.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-media-banner',
  templateUrl: './media-banner.component.html',
  styleUrls: ['./media-banner.component.scss']
})
export class MediaBannerComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() img: string;
  @Input() link: string;

  path: string = environment.thumbUrl;


  constructor(
    private structureService: StructureService
  ) {
  }

  ngOnInit() {
  }

  get route() {
    return this.structureService.getRoute(this.link);
  }

}
