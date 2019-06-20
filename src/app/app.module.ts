import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { TimelinepageComponent } from './timelinepage/timelinepage.component';
import { ProjecthubpageComponent } from './projecthubpage/projecthubpage.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ExperiencepageComponent } from './experiencepage/experiencepage.component';
import { PortefoliopageComponent } from './portefoliopage/portefoliopage.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutpageComponent,
    SkillpageComponent,
    ProjectpageComponent,
    ContactpageComponent,
    TimelinepageComponent,
    ProjecthubpageComponent,
    NavigationMenuComponent,
    WelcomepageComponent,
    ExperiencepageComponent,
    PortefoliopageComponent
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
