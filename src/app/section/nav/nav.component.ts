import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isCollapsed = true;
  public scrollpos: number = window.pageYOffset;
  constructor() { }

  ngOnInit(): void { }

  @HostListener("window: scroll", [])
  onScroll() {
    this.scrollpos > window.pageYOffset ? document.getElementById("navbar").style.top = "0" : document.getElementById("navbar").style.top = "-80px";
    this.scrollpos = window.pageYOffset;
  }
}
