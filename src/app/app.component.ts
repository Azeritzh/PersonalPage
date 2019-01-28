import { Component, ViewChild, OnInit, ElementRef} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("mainElement") mainElement
  @ViewChild("aboutpage", { read: ElementRef }) aboutpageRef: ElementRef
  @ViewChild("skillpage", { read: ElementRef }) skillpageRef: ElementRef
  @ViewChild("projectpage", { read: ElementRef }) projectpageRef: ElementRef
  @ViewChild("contactpage", { read: ElementRef }) contactpageRef: ElementRef

  title = 'PersonalPage';
  lastScrollPosition = 0;
  aboutpagePos
  skillpagePos
  projectpagesPos

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
        "assets/images/idun-patient.png",
        "assets/images/idun-patient.png"],
      background: false
    },
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
    }
  ]

  ngOnInit() {
    this.mainElement.nativeElement.addEventListener("scroll", () => {
      this.lastScrollPosition = this.mainElement.nativeElement.scrollTop
    })
    this.aboutpagePos = this.aboutpageRef.nativeElement.offsetTop
    this.skillpagePos = this.skillpageRef.nativeElement.offsetTop
    this.projectpagesPos = this.projectpageRef.nativeElement.offsetTop
  }

  get contactpagePos() {
    return this.contactpageRef.nativeElement.offsetTop - (this.aboutpagePos / 2)
  }

  scroll(element) {
    element.nativeElement.scrollIntoView({behavior: "smooth", block: "start"})
  }
}
