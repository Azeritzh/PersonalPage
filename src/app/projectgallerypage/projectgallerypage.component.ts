import { Component, OnInit } from '@angular/core';
import { NavigationProjectMenuComponent } from '../navigation-project-menu/navigation-project-menu.component';

@Component({
  selector: 'app-projectgallerypage',
  templateUrl: './projectgallerypage.component.html',
  styleUrls: ['./projectgallerypage.component.scss']
})
export class ProjectgallerypageComponent implements OnInit {

  constructor(private navigationMenu: NavigationProjectMenuComponent) {
    this.navigationMenu.projectEvent.subscribe((value: any) => {
      this.recieveMessage(value)
    })
  }

  ngOnInit() {
  }

  showProjectid = 0

  recieveMessage($event) {
    this.showProjectid = $event
  }

  projectpageContent = [
    {
      project: 'esoft',
      text1: 'Here you can see some of the images of what I ended up with while working for Esoft.',
      image1: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image2: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image3: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image4: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image5: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image6: 'assets/images/portefoliopage/portefolio_img_placeholder.svg'
    },
    {
      project: 'idunhealth',
      text1: 'The work on this project still continues here in 2019, and therefore is not done yet, but here is an overview of what it looks like right now.',
      image1: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image2: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image3: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image4: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image5: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image6: 'assets/images/portefoliopage/portefolio_img_placeholder.svg'
    },
    {
      project: 'backup',
      text1: 'This project is still a work in progress and today consists of a physical product as well as a web application and landing page as seen on the images below.',
      image1: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image2: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image3: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image4: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image5: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image6: 'assets/images/portefoliopage/portefolio_img_placeholder.svg'
    },
    {
      project: 'personalpage',
      text1: 'Below you can see the iterations I went through as well as what I did in the form of research and wireframing to come up with the design my page has today.',
      image1: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image2: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image3: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image4: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image5: 'assets/images/portefoliopage/portefolio_img_placeholder.svg',
      image6: 'assets/images/portefoliopage/portefolio_img_placeholder.svg'
    }
  ]

}
