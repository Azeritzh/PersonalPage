import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutpageComponent,
    SkillpageComponent,
    ProjectpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
