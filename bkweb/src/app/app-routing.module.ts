import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'; 
import { AboutComponent } from './about/about.component'; 

//blog routes
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component'; 
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component'; 
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component'; 



const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'blog',
        children: [
                { path: '', component: BlogsListComponent},
                { path: 'blogs/:id', component: BlogDetailsComponent},
                { path: 'add', component: AddBlogComponent}
            ]
    }
    
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
