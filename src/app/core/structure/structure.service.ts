import { Injectable } from '@angular/core';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { StructureConfig } from './structure-config';
import { StructureMenuItem } from './structure-menu-item';

@Injectable()
export class StructureService {
  private langsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  langs$ = this.langsSubject.asObservable();

  private menuSubject: BehaviorSubject<StructureMenuItem[][]> = new BehaviorSubject<StructureMenuItem[][]>([]);
  menu$ = this.menuSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {

    this.http.get<StructureConfig>(`${environment.structureUrl}/main.json`)
      .subscribe(data => {
        this.langsSubject.next(data.langs);
        this.menuSubject.next(data.menu);
      });
  }

}
