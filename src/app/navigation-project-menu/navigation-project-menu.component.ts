import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-project-menu',
  templateUrl: './navigation-project-menu.component.html',
  styleUrls: ['./navigation-project-menu.component.scss']
})
export class NavigationProjectMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  public showProjectid = 0

  @Output() projectEvent = new EventEmitter<number>()

  returnToHomePage() {
    this.router.navigate(['/home'])
  }

  showProject(projectId) {
    this.router.navigate(['/projects', projectId])
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showProjectid = +params['id']
    })
  }

}
