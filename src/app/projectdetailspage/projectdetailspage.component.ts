import { Component, OnInit } from '@angular/core';
import { NavigationProjectMenuComponent } from '../navigation-project-menu/navigation-project-menu.component';

@Component({
  selector: 'app-projectdetailspage',
  templateUrl: './projectdetailspage.component.html',
  styleUrls: ['./projectdetailspage.component.scss']
})
export class ProjectdetailspageComponent implements OnInit {

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
      text1: 'I joined this ongoing project first as an intern and later as an employee. The web application I worked on was an advertising SaaS system for real estate agents mainly here in Denmark.',
      text2: 'This project is lead by the Connect team that I joined and became a part of while I worked there.',
      text3: 'The web application is developed in Angular and TypeScript with a Java backend and consists of an advertising system for real estate agents.',
      text4: 'The system enables the agents to create advertising banners that will be distributed on pages like Facebook, to reach the biggest amount of potential buyers as possible. The system then gives the agents an overview over how the campaign is doing and how much were spent on it.',
      image1: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image2: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image3: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image4: 'assets/images/welcomepage/welcome_img_placeholder.svg',
    },
    {
      project: 'idunhealth',
      text1: 'The project started in 2015 among friends from the university, and has been ongoing ever since. The project is lead by Leslie Christiensen and our goal with the project is to develop a better platform for private clinics.',
      text2: 'With this webplatform we will improve the interaction between doctors, secretaries, patients and the system.',
      text3: 'The application is a modular webapplication developed in Angular and TypeScript, and consists of a patient booking and journaling module, as well as a clinic managing system.',
      text4: 'The management system has been built to make the daily doings in the clinic easier and prevent errors when booking and filling out  journals. The system also has a module for handling bills and the daily economy.',
      image1: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image2: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image3: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image4: 'assets/images/welcomepage/welcome_img_placeholder.svg',
    },
    {
      project: 'backup',
      text1: 'This began as a university project back in 2016, where we were group of four friends who started it. The problem we are trying to solve by doing this project, is the pain people get in their back and body while doing sedentary work. This was especially focused on people with long work hours in an office environment, with little to no movement doing the day.',
      text2: 'The product consists of a physical product, designed to stand on or at most types of work stations and a web application where the user can see their progress. ',
      text3: 'What makes this product special is that it is designed to work without the web application and only gently nudges the user so to not disrupt their workflow, allowing them to finish before reacting to the product.',
      image1: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image2: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image3: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image4: 'assets/images/welcomepage/welcome_img_placeholder.svg',
    },
    {
      project: 'personalpage',
      text1: 'After my studies I found that I wanted to become better at web development and decided to develop my own personal page in Angular and TypeScript.',
      text2: 'The goal for this page was to have a project to show to potential employers and to have a page where recruiters and project owners can learn about that I can provide of value to them and their company.',
      text3: 'The page is developed in Angular and TypeScript, and uses Scss, Angular materials and FxLayout.',
      text4: 'It consists of a landing page built as a scroll page, where all important information can be found by just scrolling. The whole page is responsive and works on both large and small computer screens as well as tablet and mobile. ',
      image1: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image2: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image3: 'assets/images/welcomepage/welcome_img_placeholder.svg',
      image4: 'assets/images/welcomepage/welcome_img_placeholder.svg',
    },
  ]
}
