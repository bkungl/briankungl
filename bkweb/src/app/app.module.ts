import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './resume/header/header.component';
import { JobdisplayComponent } from './resume/jobdisplay/jobdisplay.component';
import { SearchComponent } from './resume/search/search.component';
import { SearchdisplayComponent } from './resume/searchdisplay/searchdisplay.component';
import { EducationComponent } from './resume/education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobComponent } from './resume/jobdisplay/job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeComponent,
    HeaderComponent,
    JobdisplayComponent,
    SearchComponent,
    SearchdisplayComponent,
    EducationComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
