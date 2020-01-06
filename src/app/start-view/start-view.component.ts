import { Component, OnInit, HostListener} from '@angular/core';
import {  Observable, Subscription } from "rxjs";


@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})



// @HostListener('scroll', ['$event']) // for scroll events of the current element
export class StartViewComponent implements OnInit {
  public viewHeight: any;
  constructor() { }

resizeObservable$: Observable<Event>
resizeSubscription$: Subscription

  ngOnInit() {

  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.viewHeight = window.innerHeight;
    }
}
