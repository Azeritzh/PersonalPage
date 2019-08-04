import { Component, OnInit } from '@angular/core';
import { NavigationProjectMenuComponent } from '../navigation-project-menu/navigation-project-menu.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectworkprocesspage',
  templateUrl: './projectworkprocesspage.component.html',
  styleUrls: ['./projectworkprocesspage.component.scss']
})
export class ProjectworkprocesspageComponent implements OnInit {

  constructor(
    private navigationMenu: NavigationProjectMenuComponent,
    private route: ActivatedRoute
    ) {
    this.navigationMenu.projectEvent.subscribe((value: any) => {
      this.recieveMessage(value)
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.showProjectid = +params['id']
    })
  }

  showProjectid = 0

  recieveMessage($event) {
    this.showProjectid = $event
  }

  projectpageContent = [
    {
      project: 'esoft',
      text1: 'I first joined the project as an intern and had to learn to know the system first before I could properly work on it.',
      text2: 'My first task on this project was to go through the system and look at it from a users viewpoint. By doing that I could get to know the system, and note down everything I found to be something that might disrupt the users workflow.',
      text3: 'It was very important that I did this while I didn\'t know a lot about the system as this would allow me to experience the system as a first-time user.',
      text4: 'Here I also not only went through the overall system, but also went through the process of making a campaign while noting down everything I found to disrupt the workflow and could lower performance.',
      text5: 'After my introduction to the system, I was given the task of coming up with design suggestions for a landing page for their rebranding of the system to Shine.',
      text6: 'To do this I began with a lot of reseach of existing pages and design trends and sketched out several wireframes on paper to try out different layouts.',
      text7: 'Throughout this process I got feedback from Lisbeth Chawes and took what we both agreed on to be the better designs and made them into digital wireframes in Adobe XD.',
      text8: 'This was brought to the lead designer who would use them as a base to work from.',
      text9: 'My main role at Esoft was as a frontend developer, where I started out with fixing translations and redesigning as well as coded new UI designs for some of the existing pages.',
      text10: 'I collaboration with their senior frontend developer Darryl, I began development on their payment module. Where I made wireframes for the UI, coded it, researched Stripe and incorporated it into the system.',
      text11: 'I also constructed new advertisement banners and added them into the system.',
      image1: 'assets/images/projectpage_images/esoft/esoft_4.png',
      image2: 'assets/images/projectpage_images/esoft/esoft_15.png',
      image3: 'assets/images/projectpage_images/esoft/esoft_2.png'
    },
    {
      project: 'idunhealth',
      text1: 'At the start of the project, the application had a very humble and simple grey design, with very little content as seen on the first image.',
      text2: 'I didn\'t have much experience with webdesign back then, so I began with researching existing webpages and came up with the design on the second image.',
      text3: 'While more and more content was made for the application I continued to take the design through several design iterations. At each iteration I had recieved feedback from the group and friends and used that feedback to constantly improve on the design.',
      text4: 'To become better at UI design I also did my own research and reading while working on this project, and learned a lot through that process.',
      text5: 'At each design iteration I coded the design myself. First in pure Html, css and JavaScript, but later in Angular and TypeScript, where I later incorporated Angular material design and fx layout.',
      text6: 'The work with the UI I did in the beginning of this project ended up becoming my bachelor project that I went to exam in back in June 2016.',
      text7: 'It had the title "Development of UI and databasecommunication to Idun Health" and contained my design research, my work with the database layer and with the security of the system.',
      text9: 'Throughout my work process with this project, I also developed high-fidelity wireframes in the form of html mockups to show my ideas for design. I also made observations of already existing systems while in use and learned about what the users wanted and their pain points with the system they already used.',
      text10: 'All this knowledge and research was used as I developed in the UI with the project team. Iterating through each step to make something better than the last.',
      image1: 'assets/images/projectpage_images/idunhealth/idun_5.png',
      image2: 'assets/images/projectpage_images/idunhealth/idun_6.png',
      image3: 'assets/images/projectpage_images/idunhealth/idun_9.png'
    },
    {
      project: 'backup',
      text1: 'As this project began as a university project, I have worked on it for a long time. We worked on this project throughout two semesters, and two of my friends continued to work on it as their master thesis while I did another project.',
      text2: 'My biggest role throughout the project was as a product designer, where I created low fidelity prototypes like storyboards that explored how a user would interact with the product and what it should look like.',
      text3: 'This included sketches and 3D modelling of different bases for the product to rest in, that had to be 3D printed.',
      text4: 'The product only consisted of the physical part in the earlier stages of the project.',
      text5: 'The second semester was used to explore the idea even further and iterate more on both the design and the idea.',
      text6: 'A lot of research was done into the problem we were trying to solve, as well as existing products already on the market.',
      text7: 'In both semesters the product was taken through several user tests where we iterated on the design decisions and feedback from our test groups.',
      text8: 'What we ended up with at the end of the semesters were a fully working prototype.',
      text9: 'After our studies were finished I joined the project again, and continued work on it with two of my friends to take it from prototype to product.',
      text10: 'My role in the project changed at this stage of the project from being mainly a product design, to also take on the frontend development of the web application and landing page for the project. ',
      text11: 'This web application began in pure JavaScript, Html and Css, but was later ported to Angular by me after a lot of good experiences with this framework. Again I made wireframes and coded the UI and functionality of the pages.',
      image1: 'assets/images/projectpage_images/backup/backup_11.png',
      image2: 'assets/images/projectpage_images/backup/backup_13.png',
      image3: 'assets/images/projectpage_images/backup/backup_14.png'
    },
    {
      project: 'personalpage',
      text1: 'This project have gone through around five iterations where each iteration was built upon the next and included the feedback I had gotten from friends',
      text2: 'I began the project by reading up on and trying to understand the process of developing a personal web page, as well as find inspiration in other peoples work.',
      text3: 'Each iteration began with me making wireframes on paper to explore layout and feel for each page. I do admit that I, in the beginning thought that I could just "wing it" with the design as I did while drawing, but quickly found that this was not the case.',
      text4: 'Therefore I planned all parts of the design working forward from the first iteration.',
      text5: 'Throughout the development I did a lot of research into the development of web pages, as well as the user experience. It was important for me that the page spoke to the user, but also reflected me as a person.',
      text6: 'I found this to be very tricky and ended up scrapping several iterations of ideas before I had finished them.',
      text7: 'Throughout I also explored colors and what they could make the user feel, as well as how to best present myself and be interesting to potential employees.',
      text9: 'As I started work at Esoft, my work on my personal page stopped. But I quickly resumed it with new energy and experience as I became available on the job market once again.',
      text10: 'My experience at Esoft made me look at the designs iterations I did with fresh eyes and I started all over again.',
      text11: 'I did all the research again and looked into design trends, I also made several new wireframes and redid the design as well as finally adding responsiveness to it as this was something the earlier iterations missed.',
      image1: 'assets/images/projectpage_images/personalpage/personal_10.png',
      image2: 'assets/images/projectpage_images/personalpage/personal_9.png',
      image3: 'assets/images/projectpage_images/personalpage/personal_13.png'
    },
  ]

}
