import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    yarnname: new FormControl(''),
    quantity: new FormControl(''),
    counts: new FormControl(''),
    colour: new FormControl(''),
    weight: new FormControl(''),
    received_date: new FormControl(''),
    
  });

  sub(){
    console.log(this.profileForm.value);
  }

}
