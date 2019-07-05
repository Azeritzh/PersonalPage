import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { TimelinepageComponent } from './timelinepage/timelinepage.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ExperiencepageComponent } from './experiencepage/experiencepage.component';
import { PortefoliopageComponent } from './portefoliopage/portefoliopage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { ProjectdetailspageComponent } from './projectdetailspage/projectdetailspage.component';
import { NavigationProjectMenuComponent } from './navigation-project-menu/navigation-project-menu.component';
import { ProjectworkprocesspageComponent } from './projectworkprocesspage/projectworkprocesspage.component';
import { ProjectgallerypageComponent } from './projectgallerypage/projectgallerypage.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ContactpageComponent,
    TimelinepageComponent,
    NavigationMenuComponent,
    WelcomepageComponent,
    ExperiencepageComponent,
    PortefoliopageComponent,
    ServicespageComponent,
    SkillspageComponent,
    ProjectdetailspageComponent,
    NavigationProjectMenuComponent,
    ProjectworkprocesspageComponent,
    ProjectgallerypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
