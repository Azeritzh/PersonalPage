import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalPage';

  list = [
    {
      title: "Private Healthcare Webapplication",
      technologies: "Angular, TypeScript, HTML, SCSS, C#, NodeJS, Jasmine",
      texts: [
        "I've worked on this project as a unpaid part-time job from back in 2015, where it started, until now. My roles in this project was Frontend developer and UI Designer.",
        "I've coded on serveral modules throughout the process, where I, among others, have been working on the language and patient journal module.",
        "My main task was to design the overall look of the application and make sure every page would be easily accessible for new users.",
        "To the left you can see images of the application as well as the template system for the journal module. The project is still on-going to this day."],
      images: [
        "assets/images/idun-start.png",
        "assets/images/idun-login.png",
        "assets/images/idun-template.png",
        "assets/images/idun-patient.png"],
      background: ""
    },
    {
      title: "Private Healthcare Webapplication",
      technologies: "Angular, TypeScript, HTML, SCSS, C#, NodeJS, Jasmine",
      texts: [
        "I've worked on this project as a unpaid part-time job from back in 2015, where it started, until now. My roles in this project was Frontend developer and UI Designer.",
        "I've coded on serveral modules throughout the process, where I, among others, have been working on the language and patient journal module.",
        "My main task was to design the overall look of the application and make sure every page would be easily accessible for new users.",
        "To the left you can see images of the application as well as the template system for the journal module. The project is still on-going to this day."],
      images: [
        "assets/images/idun-start.png",
        "assets/images/idun-login.png",
        "assets/images/idun-template.png",
        "assets/images/idun-patient.png"],
        background: "true"
    }
  ]
}
