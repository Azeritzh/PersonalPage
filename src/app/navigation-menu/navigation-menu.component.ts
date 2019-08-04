import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @ViewChild('pageContent') pageContent: ElementRef
  public shownPage = 'welcome'
  private get aboutPos() {
    return document.getElementById('about').offsetTop
  }
  private get portefolioPos() {
    return document.getElementById('portefolio').offsetTop
  }
  private get servicesPos() {
    return document.getElementById('services').offsetTop
  }
  private get skillsPos() {
    return document.getElementById('skills').offsetTop
  }
  private get contactPos() {
    return document.getElementById('contact').offsetTop
  }

  constructor() { }

  ngOnInit() {
    document.getElementById('mainContainer').addEventListener('scroll', (e) => {

      const scrollPos = document.getElementById('mainContainer').scrollTop

      if (scrollPos < this.aboutPos) {
        this.shownPage = 'welcome'
      }
      else if (scrollPos >= this.aboutPos && scrollPos < this.portefolioPos) {
        this.shownPage = 'about'
      }
      else if (scrollPos >= this.portefolioPos && scrollPos < this.servicesPos) {
        this.shownPage = 'portefolio'
      }
      else if (scrollPos >= this.servicesPos && scrollPos < this.skillsPos) {
        this.shownPage = 'services'
      }
      else if (scrollPos >= this.skillsPos && scrollPos < this.contactPos) {
        this.shownPage = 'skills'
      }
      else if (scrollPos >= this.contactPos) {
        this.shownPage = 'contact'
      }
    })
  }

  public scrollToComponent(element) {
    let mainComponent = document.getElementById('mainContainer')
    switch(element) {
      case 'about':
        mainComponent.scrollTop = this.aboutPos
        break
      case 'portefolio':
        mainComponent.scrollTop = this.portefolioPos
        break
      case 'services':
        mainComponent.scrollTop = this.servicesPos
        break
      case 'skills':
        mainComponent.scrollTop = this.skillsPos
        break
      case 'contact':
        mainComponent.scrollTop = this.contactPos
        break
    }
  }


}
