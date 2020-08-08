import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'; 
import { AboutComponent } from './about/about.component'; 


const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
