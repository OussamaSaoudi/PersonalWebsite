import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ProjectViewService } from '../project-view.service';
import { Project } from '../project';
import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({  opacity: 0, bottom: 20, transform: 'translateX(-4rem) ' }),
        animate(500)
      ])
    ]),
    trigger('projectFade', [
      transition( '* => *', [
        query('.cardblock', style({transform: 'translateX(-100%)'})),
        query('.cardblock', stagger('600ms', [
          animate('900ms', style({transform: 'translateX(0%)'}))
        ]))
      ])
    ])

  ]
})
export class ProjectViewComponent implements OnInit {
  projectList: Project[];

  @ViewChild('grow', {static: false}) menuElement: ElementRef;

  constructor(
    private projectViewService: ProjectViewService
  ) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projectViewService.getList().subscribe(
      projlist => this.projectList = projlist
    );
  }
  getBackgroundColor(tech: string) {
    if  ( tech === 'C++') {
      console.log('badge ' + tech);
      return 'badge CPP';
    } else if ( tech === 'DS/A'){
      console.log('badege + DSA')
      return 'badge DSA';
    }
    console.log('badge ' + tech);
    return 'badge ' + tech;
  }


}
