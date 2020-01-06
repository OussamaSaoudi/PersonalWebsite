
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll( event) {
      const windowScroll = window.pageYOffset;
      if (windowScroll > this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}
