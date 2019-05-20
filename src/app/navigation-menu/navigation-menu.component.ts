import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @Output() aboutClick = new EventEmitter()
  @Output() skillClick = new EventEmitter()
  @Output() projectsClick = new EventEmitter()
  @Output() contactClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
