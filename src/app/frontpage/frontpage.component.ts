import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  @Output() aboutClick = new EventEmitter()
  @Output() skillClick = new EventEmitter()
  @Output() projectsClick = new EventEmitter()
  @Output() contactClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
    setTimeout(this.transitionText, 10)
  }

  transitionText() {
    document.getElementById("frontpage-header").classList.add("appear")
  }
}
