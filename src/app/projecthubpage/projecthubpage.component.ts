import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projecthubpage',
  templateUrl: './projecthubpage.component.html',
  styleUrls: ['./projecthubpage.component.scss']
})
export class ProjecthubpageComponent implements OnInit {
  constructor() { }

  list = [
    {
      title: "Private Healthcare Webapplication",
      technologies: "Angular, TypeScript, HTML, SCSS, C#, NodeJS, Jasmine",
      texts: [
        "This project was about developing a web application to private clinics in collaboration with a doctor from Copenhagen.",
        "I worked on this in my spare time where I did frontend development in TypeScript and Angular. I also worked as a UI designer on the project, where I helped establish the overall design and made all vector icons and the logo."],
      images: [
        "assets/images/idun-start.png",
        "assets/images/idun-login.png"]
    } /*,
    {
      title: "Master Thesis",
      technologies: "Unity, VR-tech (Oculus Rift), Gesture sensor (Leap Motion)",
      texts: [
        "I finished my master thesis back in July 2018 with a fellow student. The project involved rehabilitation of neurological patients through stimulation of the mirror neurons in the brain through VR. ",
        "The whole project was coded in Unity and incorporated the Oculus Rift as sensor and the Leap Motion as actuator for the patient.",
        "To stimulate the mirror neurons in the brain we made a virtual hand in VR that was controlled by the healthy hand. This could trick the brain into thinking that the hand was the patients own.",
        "Through an agile iterative proces where each prototype were tested with healthy persons, the project concluded with a fully functional prototype with two exercises to train hand coordination."],
      images: [
        "assets/images/thesis-task.png",
        "assets/images/thesis-demonstration.png",
        "assets/images/thesis-unity.png",
        "assets/images/thesis-code.png"],
      background: true
    }*/
  ]

  ngOnInit() {
  }

}
