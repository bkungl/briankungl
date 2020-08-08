import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './resume/header/header.component';
import { JobdisplayComponent } from './resume/base/jobdisplay/jobdisplay.component';
import { SearchComponent } from './resume/base/search/search.component';
import { SearchdisplayComponent } from './resume/base/searchdisplay/searchdisplay.component';
import { EducationComponent } from './resume/base/education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobComponent } from './resume/base/jobdisplay/job/job.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';



import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';
import { BaseComponent } from './resume/base/base.component';
import { PortfolioComponent } from './resume/portfolio/portfolio.component';
import { LearningComponent } from './resume/learning/learning.component'; 
import {MatMenuModule} from '@angular/material/menu';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'; 


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
    JobComponent,
    BaseComponent,
    PortfolioComponent,
    LearningComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      MatButtonToggleModule,
      MatToolbarModule, 
      MatIconModule, 
      MatTabsModule,
      MatMenuModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
