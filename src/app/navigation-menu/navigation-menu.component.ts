import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element) {
    document.getElementById(element).scrollIntoView({behavior: "smooth"})
    document.getElementById('navbar').style.display = 'table'
  }

}
