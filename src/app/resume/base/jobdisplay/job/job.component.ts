import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './../../../../../assets/jobs.json';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    jobs:  any  = (data  as  any).default;  
    
  constructor() { }

  ngOnInit(): void {
  }
    

   
}
