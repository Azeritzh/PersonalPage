import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectpageComponent implements OnInit {
  @Input() content: {title: String, technologies: String, texts: String[], images: String[], background: boolean}

  constructor() { }

  ngOnInit() {
  }

}
