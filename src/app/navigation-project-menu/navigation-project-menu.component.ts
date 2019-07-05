import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-project-menu',
  templateUrl: './navigation-project-menu.component.html',
  styleUrls: ['./navigation-project-menu.component.scss']
})
export class NavigationProjectMenuComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  public showProjectid = 0

  @Output() projectEvent = new EventEmitter<number>()

  returnToHomePage() {
    this.router.navigate(['/home'])
  }

  showProject(projectId) {
    this.showProjectid = projectId
    this.projectEvent.emit(this.showProjectid)
  }

  ngOnInit() {
  }

}
