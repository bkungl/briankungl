import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

   //blog model
  blog = {
      blogID: 0,
      blogTitle: '',
      isStarred: false,
      isHidden: false  
  };
  submitted = false;

    
  constructor(private blogService:  BlogService) { }

  ngOnInit(): void {
    this.retrieveBlogs();
  }

  retrieveBlogs(): void {
    this.blogService.getAll()
      .subscribe(
        data => {
          this.blog = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
    
  newBlog(): void {
      console.log('test new blog');
      this.submitted = false;
      this.blog = {
        blogID: 1,
        blogTitle: 'Test',
        isStarred: false,
        isHidden: false  
      };
  }

}
