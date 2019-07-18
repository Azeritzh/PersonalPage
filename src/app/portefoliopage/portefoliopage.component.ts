import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portefoliopage',
  templateUrl: './portefoliopage.component.html',
  styleUrls: ['./portefoliopage.component.scss']
})
export class PortefoliopageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showProject(projectId) {
    this.router.navigate(['/projects', projectId])
  }

}
