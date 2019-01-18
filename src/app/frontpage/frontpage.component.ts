import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(this.transitionText, 10)
  }

  transitionText() {
    document.getElementById("frontpage-header").classList.add("appear")
  }

}
