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

  ngOnInit() {
    // this.mainElement.nativeElement.addEventListener("scroll", () => {
    //   this.lastScrollPosition = this.mainElement.nativeElement.scrollTop
    // })
    // this.aboutpagePos = this.aboutpageRef.nativeElement.offsetTop
    // this.skillpagePos = this.skillpageRef.nativeElement.offsetTop
    // this.projectpagesPos = this.projectpageRef.nativeElement.offsetTop
  }

  get contactpagePos() {
    return this.contactpageRef.nativeElement.offsetTop - (this.aboutpagePos / 2)
  }

  scroll(element) {
    element.nativeElement.scrollIntoView({behavior: "smooth", block: "start"})
  }
}
