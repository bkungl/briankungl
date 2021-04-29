import { Component, OnInit } from '@angular/core';
import  *  as  data  from  './../../../../assets/jobs.json';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    jobs:  any  = (data  as  any).default;  
    panelOpenState = false;
    
  constructor() { }

    
  ngOnInit(): void {
      
  }
    
    
    randomCol() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    
    
    

}
