import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  res:any;

  constructor(private data:CrudService) {

    this.data.retrive().subscribe(res=>{
      this.res=res;
      console.log(res);
    })

   }

  


}
