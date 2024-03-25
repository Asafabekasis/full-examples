import { Component, OnInit } from '@angular/core';
import { NestService } from './nest.service';

@Component({
  selector: 'app-nestexamples',
  templateUrl: './nestexamples.component.html',
  styleUrls: ['./nestexamples.component.scss']
})
export class NestexamplesComponent implements OnInit {

  constructor(public nestService:NestService) { }

  ngOnInit(): void {
    this.nestService.getUsers().subscribe(
      res=>{
        console.log(res);  
        
      }
    )
  }

}
