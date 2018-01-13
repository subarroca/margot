import { Component, OnInit } from '@angular/core';
import { StructureService } from '../structure/structure.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu$ = this.structureService.menu$;

  constructor(
    private structureService: StructureService
  ) { }

  ngOnInit() {
  }

}
