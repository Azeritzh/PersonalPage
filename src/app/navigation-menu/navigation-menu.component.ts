import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @ViewChild('pageContent') pageContent: ElementRef

  constructor() { }

  ngOnInit() {
    document.getElementById('mainContainer').addEventListener('scroll', function(e) {
      console.log(document.getElementById('mainContainer').scrollTop)
    })
  }

  scrollToComponent(element) {
    let mainComponent = document.getElementById('mainContainer')
    switch(element) {
      case 'about':
        mainComponent.scrollTop = 1000
        break
      case 'portefolio':
        mainComponent.scrollTop = 2500
        break
      case 'services':
        mainComponent.scrollTop = 3300
        break
      case 'skills':
        mainComponent.scrollTop = 4000
    }
  }
}
