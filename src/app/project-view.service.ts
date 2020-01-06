import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';
import { PROJECTLIST } from './project_list';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  constructor(  ) { }
  getList(): Observable<Project[]> {
    return of(PROJECTLIST);
  }
}
